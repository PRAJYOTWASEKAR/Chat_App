// public/script.js
const socket = io();
let username = prompt("Enter your username:");

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const message = input.value;
    if (message.startsWith('/w ')) {
        const parts = message.split(' ');
        const recipient = parts[1];
        const privateMessage = parts.slice(2).join(' ');
        socket.emit('private message', { user: username, recipient, message: privateMessage });
    } else {
        socket.emit('chat message', { user: username, message });
    }
    input.value = '';
});

socket.on('chat message', function(data) {
    const item = document.createElement ('li');
    item.textContent = `${data.user}: ${data.message}`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

socket.on('private message', function(data) {
    const item = document.createElement('li');
    item.textContent = `Private from ${data.user}: ${data.message}`;
    item.style.color = 'red'; // Highlight private messages
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
socket.on('load messages', function(messages) {
    messages.forEach(data => {
        const item = document.createElement('li');
        item.textContent = `${data.user}: ${data.message}`;
        messages.appendChild(item);
    });
    window.scrollTo(0, document.body.scrollHeight);
});