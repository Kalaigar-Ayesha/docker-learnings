# docker-testapp

## Setup & Usage

### 1. Install dependencies

```
npm install
```

### 2. Create a `.env` file (optional)

You can override the defaults by creating a `.env` file in this directory:

```
MONGO_URL=mongodb://ayesha:ayesha%400101@mongo:27017
DB_NAME=ayesha-db
PORT=5050
```

### 3. Start MongoDB (with Docker Compose)

```
docker-compose -f mongodb.yml up -d
```

### 4. Start the server

```
npm start
```

### 5. Access the app
- Frontend: [http://localhost:5050/](http://localhost:5050/)
- Mongo Express: [http://localhost:8081/](http://localhost:8081/)

### 6. API Endpoints
- `POST /addUser` — Add a user (fields: email, username, password)
- `GET /getUsers` — List all users