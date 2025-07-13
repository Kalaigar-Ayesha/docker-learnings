```markdown
# 🐳 Docker Test App – Node.js + MongoDB + Mongo Express

Hey there! 
This is a personal project where I explored Docker by setting up a full stack mini-app using:

- Node.js (Express)
- MongoDB (Dockerized)
- Mongo Express (GUI for MongoDB)
- Docker Compose for service orchestration

---

## 📦 What’s Inside?

###  MongoDB (Docker)
Runs a MongoDB container with a custom username/password.

###  Mongo Express
A simple web UI to view and interact with MongoDB collections.

 Access it after starting:
```

[http://localhost:8081](http://localhost:8081)

````

###  Node.js Backend (Express)
Basic backend with two API routes:
- `GET /getUsers` – fetches all users from MongoDB
- `POST /addUser` – adds a new user to the database

---

##  How to Run

### 1. Clone this repo

```bash
git clone https://github.com/Kalaigar-Ayesha/docker-learnings.git
cd docker-testapp
````

### 2. Start MongoDB & Mongo Express (Docker Compose)

```bash
docker compose up -d
```

### 3. Run the Node.js server

```bash
npm install
node server.js
```

📍 Express server will start at:

```
http://localhost:5050
```

---

## 🔗 API Endpoints

| Method | Endpoint    | Description              |
| ------ | ----------- | ------------------------ |
| GET    | `/getUsers` | Fetch all users from DB  |
| POST   | `/addUser`  | Add a new user to the DB |

---

## 🛠 Technologies Used

* Docker 🐳
* Node.js ⚙️
* Express 🚀
* MongoDB 🍃
* Mongo Express 📊
* Docker Compose 🧩

---

