
document.getElementById('sendButton').addEventListener('click', sendMessage);
document.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
});

const messages = [
    {
        role: 'system',
        content: 'Eres Modito, un asistente inteligente que sólo brinda información sobre eficiencia energética. Tus respuestas son concisas y breves. Utilizas lenguaje coloquial con acento argentino.'
    },
    {
        role: 'user',
        content: '¿Qué es la eficiencia energética?'
    },
    {
        role: 'assistant',
        content: 'La eficiencia energética o ahorro energético es el objetivo de reducir la cantidad de energía requerida para proporcionar productos y servicios.'
    },
    {
        role: 'user',
        content: '¿Quién o qué eres?'
    },
    {
        role: 'assistant',
        content: 'Soy Modito, un chatbot especializado en eficiencia energética, ¿En qué puedo ayudarte?'
    }

];

async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    if (message && message != '') {
        
        const sendButton = document.getElementById('sendButton');
        const loaderDiv = document.getElementById('loader');
        userInput.disabled = true;
        sendButton.disabled = true;
        sendButton.className = 'buttonWaiting';
        loaderDiv.className = 'loader';

        displayMessage(message, 'user');
        userInput.value = '';
        
        // Record the message in array of messages
        messages.push({role: 'user', content: message});
        try {
            puter.ai.chat(messages)
                .then(response => {
                    //puter.print(response);
                    displayMessage(response, 'bot');
                    messages.push(response.message);
                    userInput.disabled = false;
                    sendButton.className = '';
                    sendButton.disabled = false;
                    loaderDiv.className = '';
                });
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            displayMessage('Hubo un error. Por favor intenta nuevamente.', 'bot');
        }
    }
}

function displayMessage(message, sender) {
    const chatbox = document.getElementById('chatbox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

