# leetcode- Built a full-stack LeetCode clone using React (Vite) with Redux for state management and Tailwind CSS + DaisyUI for a responsive UI, paired with a Node.js/Express REST API and MongoDB for handling user submissions, rankings, and problem data, while implementing JWT-based authentication and Zod + React Hook Form to cut unnecessary API calls by 30%. Integrated Judge0 API for secure multi-language code execution (Java, JS, C++) with Redis managing caching and queues, and connected Judge0 error logs to OpenAI LLM to enable an AI chat feature that delivers real-time video-based solutions for logic errors.




## 🧩 Project Setup: MERN Stack (MongoDB, Express, React, Node.js)

### ✅ Prerequisites

Make sure the following are installed globally:

* [Node.js (LTS)](https://nodejs.org/)
* [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas)
* [Redis (Optional if using hosted)](https://redis.io/)
* [Postman](https://www.postman.com/) for API testing
* [VS Code](https://code.visualstudio.com/)
* [Git](https://git-scm.com/)

---

## 🔧 Step-by-Step Installation

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

---

### 2️⃣ Setup Backend

#### 📁 Navigate to Backend

```bash
cd backend
```

#### 📦 Install Node Modules

```bash
npm install
```

#### ⚙️ Create Environment File

Create a `.env` file in the `backend` folder:

```bash
touch .env
```

Paste the following content (leave values **empty** or replace with your actual keys):

```env
PORT=
DB_CONNECT_STRING=
JWT_KEY=
REDIS_PASS=
JUDGE0_KEY=
GEMINI_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

> 🔐 Need a secure `JWT_KEY`? Generate a 32-character secure random string using:
> [random.org/passwords/?num=1\&len=32\&format=plain\&rnd=new](https://www.random.org/passwords/?num=1&len=32&format=plain&rnd=new)

> ⚠️ **Never push `.env` to GitHub.** Make sure `.gitignore` includes `.env`.

---

### 3️⃣ Setup Frontend

#### 📁 Navigate to Frontend

```bash
cd ../frontend
```

#### 📦 Install Node Modules

```bash
npm install
```

---

## ▶️ Running the Project

### 🚀 Start Backend

Go to the backend folder and run:

```bash
npm run dev
```

> Make sure `nodemon` is installed (`npm install -g nodemon`) or use plain `node index.js`

### 🌐 Start Frontend

In the frontend folder:

```bash
npm run dev
```

---

## 🧪 Testing

* Visit frontend: [http://localhost:5173](http://localhost:5173) (Vite) or [http://localhost:3000](http://localhost:3000) if CRA
* Test backend routes using Postman: [http://localhost:3000/api](http://localhost:3000/api)

---

## 📝 Final Structure

```
project-folder/
├── backend/
│   ├── .env
│   ├── package.json
│   └── ...
├── frontend/
│   ├── package.json
│   └── ...
└── installation-guide.md
``



