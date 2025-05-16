# Full Stack Application

This is a full stack web application with a React-based frontend and a Node.js backend. This guide provides instructions to set up, run, and test both the frontend and backend as a developer.

---

## 📁 Project Structure

```
root/
│
├── frontend/         # React application
│   └── ...           
│
├── backend/          # Node.js backend (with Jest for testing)
│   └── ...
│
└── README.md         # Developer guide
```

---

## 🚀 Getting Started

To run this application locally, follow the instructions below.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later recommended)
- **npm** or **yarn**

---

## ⚛️ Frontend (React)

### Setup

```
cd frontend
npm install
```

### Running the App

```
npm run dev
```

The app will start in development mode and typically run on `http://localhost:3000`.

### Build for Production

```
npm run build
```

## 🛠 Backend (Node.js)

### Setup

```
cd backend
npm install
```

### Running the Server

```
npm start
```

This starts the backend server, typically at `http://localhost:5000` or your configured port.

### Testing with Jest

```
npm test
```

This runs all Jest unit tests.

## 🧪 Testing

### Backend (Jest)

- Tests are located in the `backend/src/tests` directory.
- Follows standard Jest testing patterns.

> Ensure all new features are covered with adequate tests.

---


