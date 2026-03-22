import whisper
import sounddevice as sd
import numpy as np
import scipy.io.wavfile as wav
import tempfile
import os
from http.server import HTTPServer, BaseHTTPRequestHandler
import json

os.environ["PATH"] = r"C:\Users\Ruheena\Downloads\ffmpeg-master-latest-win64-gpl-shared\ffmpeg-master-latest-win64-gpl-shared\bin" + os.pathsep + os.environ["PATH"]

model = whisper.load_model("base")
print("Whisper model loaded!")

SAMPLE_RATE = 16000
DURATION = 3

class STTHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/listen':
            print("Listening for 3 seconds...")
            audio = sd.rec(
                int(DURATION * SAMPLE_RATE),
                samplerate=SAMPLE_RATE,
                channels=1,
                dtype='float32'
            )
            sd.wait()
            print("Processing speech...")

            with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as f:
                tmp_path = f.name
                wav.write(tmp_path, SAMPLE_RATE, audio)

            result = model.transcribe(tmp_path, language='en', fp16=False)
            os.unlink(tmp_path)

            transcript = result['text'].strip()
            print(f"Heard: {transcript}")

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'text': transcript}).encode())

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST')
        self.end_headers()

    def log_message(self, format, *args):
        pass

print("STT server starting on port 5001...")
server = HTTPServer(('localhost', 5001), STTHandler)
server.serve_forever()
