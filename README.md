# 🤖 Sitara — Your AI Virtual Friend

> *Talks · Listens · Dances · Thinks · Speaks*

Sitara is a desktop AI avatar application built  using **10 tools** across **6 phases**. She is a 3D animated AI companion who can hold conversations, respond with voice, lip sync while speaking, and perform animations — all running locally on your machine.

---

## ✨ What Can Sitara Do?

- 🗣️ **Talk to you** — Powered by LLaMA3 AI running locally via Ollama
- 🎤 **Listen to your voice** — Speech-to-text using OpenAI Whisper
- 🔊 **Speak back** — Text-to-speech with Web Speech API
- 💃 **Dance & animate** — Walk, wave, dance on command via Mixamo animations
- 👄 **Lip sync** — Mouth moves in real-time while she speaks
- 👤 **3D Avatar** — Fully rendered 3D character using Babylon.js
- 🎨 **Beautiful UI** — Dark purple themed chat interface with status badge

---

## 🛠️ Tech Stack

| Phase | Feature | Tools Used |
|-------|---------|-----------|
| 1 | Project Setup | Node.js, Electron, Cursor |
| 2 | 3D Avatar | Ready Player Me, Babylon.js |
| 3 | AI Brain | Ollama, LLaMA3 |
| 4 | Voice (STT + TTS) | Whisper, Web Speech API, Python, ffmpeg |
| 5 | Animations + Lip Sync | Babylon.js, Mixamo |
| 6 | UI Polish | Bolt.ai, Lovable, Cursor |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (v18+)
- [Python](https://python.org/) (v3.9+)
- [Ollama](https://ollama.ai/) — for running LLaMA3 locally
- [ffmpeg](https://ffmpeg.org/) — for audio processing

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/sitara.git

# Go into the project folder
cd sitara

# Install dependencies
npm install
```

### Pull the AI Model

```bash
# Pull LLaMA3 model via Ollama
ollama pull llama3
```

### Run the App

```bash
# Start Ollama in background
ollama serve

# Launch Sitara
npm start
```

---

## 📁 Project Structure

```
sitara/
├── main.js              # Electron main process
├── index.html           # App UI
├── renderer.js          # Frontend logic
├── avatar/
│   └── sitara.glb       # 3D avatar file (from Ready Player Me)
├── animations/          # Mixamo animation files
├── python/
│   └── stt.py           # Whisper speech-to-text script
└── package.json
```

---

## 🎯 How It Works

```
You speak  →  Whisper transcribes  →  LLaMA3 thinks  →  TTS speaks  →  Avatar lip syncs
```

1. **You speak** into the microphone
2. **Whisper** converts your speech to text
3. **LLaMA3** (via Ollama) processes the text and generates a response
4. **Web Speech API** converts the response to audio
5. **Babylon.js** animates the avatar's mouth in sync with speech

---

## 🏗️ Built With

- **[Electron](https://electronjs.org/)** — Desktop app framework
- **[Babylon.js](https://babylonjs.com/)** — 3D rendering engine
- **[Ready Player Me](https://readyplayer.me/)** — 3D avatar creation
- **[Ollama](https://ollama.ai/)** — Local LLM runner
- **[LLaMA3](https://llama.meta.com/)** — AI language model by Meta
- **[OpenAI Whisper](https://openai.com/research/whisper)** — Speech recognition
- **[Mixamo](https://mixamo.com/)** — 3D character animations
- **[Cursor](https://cursor.sh/)** — AI code editor

---

## 🔮 Future Plans

- [ ] Memory — Sitara remembers past conversations
- [ ] Emotion detection — Changes expression based on your mood
- [ ] Custom personality settings
- [ ] More animation commands
- [ ] Mobile version

---

## 👩‍💻 Developer

Made by **Shaik Ruheena Kausar** 🚀

---

## 📄 License

This project is for educational purposes.
