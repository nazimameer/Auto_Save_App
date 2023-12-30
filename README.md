# Auto-Save Project

## Overview

This project is an auto-save application, inspired by the functionality of Google Docs, designed to automatically save data to the backend without manual intervention. It leverages `socket.io` for real-time communication between the frontend and backend, ensuring immediate updates and a seamless user experience.

## Features

- **Real-time Data Syncing:** Uses `socket.io` for efficient and live data communication between client and server.
- **Automatic Data Saving:** Eliminates the need for a manual save button by saving changes directly to the backend as they occur.
- **MongoDB Integration:** Employs MongoDB for robust and scalable data storage.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- MongoDB
- Yarn or npm

### Installation

1. **Clone the Repository:**
git clone https://github.com/nazimameer/Auto_Save_App.git your-repository-name
cd your-repository-name


2. **Install Dependencies:**
- For Backend:
  ```
  cd backend
  npm install
  ```
- For Frontend:
  ```
  cd frontend
  npm install
  ```

### Setting Up the Environment

Set up your environment variables for both the backend and frontend.

1. **Backend Environment Variables:**
Create a `.env` file in the backend directory with the following contents:

CLIENT_SOCKET_CONNECTION= YOUR_FRONTEND_URL
MONGO_CONNECTION= YOUR_DB_URI


2. **Frontend Environment Variables:**
Create a `.env` file in the frontend directory with the following contents:

VITE_SOCKET_CONNECTION= YOUR_BACKEND_URL

### Running the Application

1. **Start the Backend Server:**
Navigate to the backend directory and start the server:

cd backend
npm start

2. **Start the Frontend Application:**
In a new terminal, navigate to the frontend directory and launch the app:

cd frontend
npm run dev


## Usage

Open your browser to the frontend URL. Start creating or editing documents. Changes will be automatically saved to the backend.

## Contributing

- Fork the repository.
- Create your feature branch: `git checkout -b feature/AmazingFeature`.
- Commit your changes: `git commit -m 'Add some AmazingFeature'`.
- Push to the branch: `git push origin feature/AmazingFeature`.
- Open a pull request.

## License
