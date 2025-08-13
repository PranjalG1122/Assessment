# Assessment Project

A full-stack application with a React client, Node.js server, and a custom JSONToQuery npm package.

## Quick Setup

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd Assessment
```

### 2. Setup Package (JSONToQuery Library)

```bash
cd package
npm install
npm run build
npm link
cd ..
```

### 3. Setup Server

```bash
cd server
npm install
npm link jsontoquery
```

Create a `.env` file in the server directory:

# Database Configuration

POSTGRES_DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres
PORT=5001
USER=your_db_user
PASSWORD=your_db_password
HOST=localhost
DATABASE=your_database_name
DB_PORT=5432

```bash
npm run start
cd ..
```

### 4. Setup Client

```bash
cd client
npm install
npm start
```

## Project Structure

- **`/package`** - JSONToQuery npm package (TypeScript library for converting JSON to SQL)
- **`/server`** - Node.js Express API server (runs on port 5000)
- **`/client`** - React frontend application

## Running the Application

1. Server: `http://localhost:5000`
2. Client: `http://localhost:3000`

The server uses the JSONToQuery package to handle database operations via JSON-based queries.
