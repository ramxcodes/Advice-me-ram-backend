# Advice Me Ram Backend 📝💡

The backend of **Advice Me Ram** is a RESTful API built with Node.js, Express, and MongoDB. This API enables users to contribute advice and retrieve random pieces of advice from a database. The backend is designed to handle requests efficiently and provides endpoints for creating and fetching advice.

🚀 **Live Site**: [https://advice-me-ram.vercel.app/](https://advice-me-ram.vercel.app/)

## Features ✨

- **Post Advice**: Submit advice with an author’s name to store in the database.
- **Get Random Advice**: Fetch a random piece of advice from the database.
- **Error Handling**: Robust error handling for database and server errors.
- **Modular Structure**: Organized codebase with separate routes, controllers, and models for scalability.

## Technologies 🛠️

- **Node.js**: JavaScript runtime for server-side code.
- **Express**: Fast and minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing advice data.
- **Mongoose**: ODM for MongoDB to define models and schemas.

## API Endpoints 📬

### 1. **Post Advice**

- **URL**: `/sendadvice`
- **Method**: `POST`
- **Description**: Accepts an advice text and author name, then saves it to the database.
- **Body Parameters**:
  - `advice`: (String) The advice content.
  - `author`: (String) The name of the advice author.
- **Example Request**:
  ```json
  {
    "advice": "Stay positive!",
    "author": "John Doe"
  }
  ```
- **Example Response**:
  ```json
  {
    "message": "Advice saved successfully!"
  }
  ```

### 2. **Get Random Advice**

- **URL**: `/getadvice`
- **Method**: `GET`
- **Description**: Returns a random piece of advice from the database.
- **Example Response**:
  ```json
  {
    "advice": "Don't forget to smile!",
    "author": "Jane Smith"
  }
  ```

## Getting Started 🚀

### Prerequisites

- **Node.js** (>=12.x recommended)
- **MongoDB**: A running MongoDB instance (local or cloud-based).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ramxcodes/Advice-me-ram-backend.git
   cd advice-me-ram-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```bash
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   npm start
   ```
   The server should now be running at `http://localhost:5000`.

## Folder Structure 📂

- **`/models`**: Mongoose schemas for defining the `Advice` model.
- **`/controllers`**: Contains logic for handling requests and responses.
- **`/routes`**: Defines routes for posting and fetching advice.

## Error Handling 🚫

- If a required field is missing or there’s a database error, the server will respond with a `500` status and an appropriate error message.