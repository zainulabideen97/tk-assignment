# Chat App

This is a simple chat application built with React (frontend) and FastAPI (backend). It uses Tailwind CSS for styling and includes basic functionality to send and display messages. The app interacts with a FastAPI backend for managing chat messages.

## Features

- Chat window to display message history
- Message input field with a send button
- Responsive design with Tailwind CSS

## Technologies Used

- React (Frontend)
- FastAPI (Backend)
- Tailwind CSS
- Fetch API for making requests

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1 or higher)
- Python (v3.8 or higher)
- FastAPI for the backend

### Frontend Setup (React)

1. **Clone the repository**:

   ```bash
   git clone https://github.com/zainulabideen97/tk-assignment.git
   cd tk-assignment
   ```

2. **Navigate to the React frontend folder**:

   ```bash
   cd react_frontend
   ```

3. **Install the dependencies**:

   If you’re using npm:

   ```bash
   npm install
   ```

   Or if you’re using yarn:

   ```bash
   yarn install
   ```

4. **Start the React development server**:

   ```bash
   npm start
   ```

   This will start the React development server on `http://localhost:3000`.

### Backend Setup (FastAPI)

1. **Navigate to the FastAPI backend folder**:

   ```bash
   cd python_backend
   ```

2. **Create a virtual environment**:

   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**:

   - On Windows:

     ```bash
     venv\Scripts\activate
     ```

   - On macOS/Linux:

     ```bash
     source venv/bin/activate
     ```

4. **Install the backend dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

5. **Start the FastAPI server**:

   ```bash
   python main.py
   ```

   This will start the FastAPI server on `http://localhost:8000`.

### Running Both Servers

- Frontend: React app on `http://localhost:3000`
- Backend: FastAPI app on `http://localhost:8000`

You can now open `http://localhost:3000` in your browser to use the chat application!
