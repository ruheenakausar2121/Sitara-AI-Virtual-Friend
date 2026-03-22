async function askOllama(userMessage) {
    try {
      const response = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama3',
          messages: [
            {
              role: 'system',
              content: `You are a friendly, calm and smart AI friend. 
              Your name is Aria. You are warm, supportive and helpful.
              Keep your responses short and conversational — like a real friend texting.
              Never be too formal. Always be kind and encouraging.`
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          stream: false
        })
      })
  
      const data = await response.json()
      return data.message.content
  
    } catch (error) {
      console.error('Ollama error:', error)
      return 'Sorry, I am having trouble thinking right now. Is Ollama running?'
    }
  }
  
  module.exports = { askOllama }