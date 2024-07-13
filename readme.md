# Grocery Store API

This project is a RESTful API for managing a grocery store’s operations, built using Node.js and Express. It includes routes for handling grocery carts, employees, orders, products, and authentication, with MongoDB as the database.

## Features

- **CORS Support:** Allows cross-origin requests.
- **Body Parsing:** Parses incoming request bodies in a middleware before your handlers, available under the `req.body` property.
- **Modular Routes:** Organized routes for different functionalities.
- **MongoDB Integration:** Connects to a MongoDB database using Mongoose.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/KatOsadcha/Grocery-API
    cd grocery-store-api
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory and add your environment variables:**
    ```env
    DB_CONN="mongodb+srv://your_connection_string"
    PORT=3000
    ```

4. **Start the server:**
    ```bash
    npm start
    ```

## Usage

The API provides the following endpoints:

- **Grocery Carts:** `/groceryCarts`
- **Grocery Employees:** `/groceryEmployees`
- **Grocery Orders:** `/groceryOrders`
- **Grocery Products:** `/groceryProducts`
- **Authentication:** `/auth`

## Database Connection

The `db.js` file handles the connection to the MongoDB database using Mongoose. It loads the connection string from the `.env` file and establishes the connection.
