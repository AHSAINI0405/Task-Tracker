# 📝 Task Tracker (MERN Stack)

A **full-stack Task Tracker application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).
This app allows users to **add, view, and mark tasks as completed** with a clean UI and RESTful API integration.

✅ **Live Demo:** [https://task-tracker-pi-pink.vercel.app](https://task-tracker-pi-pink.vercel.app)
📂 **GitHub Repository:** [https://github.com/AHSAINI0405/Task-Tracker](https://github.com/AHSAINI0405/Task-Tracker.git)

---

## 🚀 Features

* ✅ Add new tasks
* 📋 View all tasks
* ✔ Mark tasks as **Completed**
* 🔄 Real-time UI updates
* 🌐 REST API-based architecture
* 🎨 Tailwind CSS for modern UI
* 🔔 Toast notifications using React Toastify

---

## 🛠 Tech Stack

### Frontend

* React.js
* Axios (API calls)
* React Toastify (notifications)
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB (Atlas or Local)
* Mongoose


## ⚙️ Environment Variables

### Backend (`backend/.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Example (MongoDB Atlas):

```env
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/tasktracker
```

---

### Frontend (`frontend/.env`)

```env
REACT_APP_API_URL=http://localhost:5000/api
```

⚠️ Restart frontend after adding `.env`

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AHSAINI0405/Task-Tracker.git
cd Task-Tracker
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

Backend will run on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

| Method | Endpoint         | Description            |
| ------ | ---------------- | ---------------------- |
| POST   | `/api/tasks`     | Add new task           |
| GET    | `/api/tasks`     | Get all tasks          |
| PUT    | `/api/tasks/:id` | Mark task as completed |

---

## 🧪 Example Task Object

```json
{
  "title": "Learn MERN Stack",
  "status": "Pending"
}
```

---

## 👨‍💻 Author

**Amit Saini**
Aspiring Full Stack Developer (MERN)
📍 India

---
