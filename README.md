# Chat Application

A simple real-time chat application built with Node.js, Express, and Socket.io. This application allows users to chat with each other in real-time, send private messages, and view chat history stored in a MongoDB database.

## Features

- **Real-time Messaging:** Users can send and receive messages instantly.
- **User Names:** Users can set their usernames for better identification in the chat.
- **Private Messaging:** Users can send private messages to specific users.
- **Message Persistence:** Chat history is stored in a MongoDB database, allowing users to see past messages.
- **Responsive UI:** Built with Bootstrap for a clean and responsive design.

## Technologies Used

- **Backend:**
  - Node.js
  - Express
  - Socket.io
  - MongoDB (with Mongoose)

- **Frontend:**
  - HTML
  - CSS (Bootstrap)
  - JavaScript

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (installed and running)

### Steps to Run the Application

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start MongoDB:**
   Make sure your MongoDB server is running. You can start it using:
   ```bash
   mongod
   ```

4. **Run the Application:**
   ```bash
   node server.js
   ```

5. **Open Your Browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to access the chat application.

## Usage

- Upon opening the application, users will be prompted to enter a username.
- Users can send messages to all participants or send private messages by typing `/w username message`.
- The chat history will be displayed, and users can see messages sent by others.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Socket.io for real-time communication.
- Mongoose for MongoDB object modeling.
- Bootstrap for responsive design.

## Contact

For any inquiries, please contact your-email@example.com.
