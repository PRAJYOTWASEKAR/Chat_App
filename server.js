const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/chat-app')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define message schema and model
const messageSchema = new mongoose.Schema({
    user: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Listen for incoming connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Load previous messages
    Message.find().then(messages => {
        socket.emit('load messages', messages); // Send previous messages to the new user
    });

    // Listen for chat messages
    socket.on('chat message', (data) => {
        const message = new Message(data);
        message.save().then(() => {
            io.emit('chat message', data); // Broadcast the message to all clients
        });
    });

    // Listen for private messages
    socket.on('private message', (data) => {
        socket.broadcast.emit('private message', data); // Send private message to the intended recipient
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});