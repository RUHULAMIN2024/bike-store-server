# Bike Store API

This is a RESTful API for managing a bike store. It allows you to manage products (bikes), place orders, and calculate total revenue. Built with Node.js, Express.js, and TypeScript, it uses MongoDB for data storage.

## Features

#### Products:

- Add, view, update, and delete bikes.
- Categories: Mountain, Road, Hybrid, Electric.

#### Orders:

- Place orders for bikes.
- Automatically update inventory:
- Reduce stock quantity.
- Mark out-of-stock items.
- Handle insufficient stock gracefully.

#### Revenue:

- Calculate total revenue from all orders.

## Setup Instructions

- Clone the Repository: "git clone https://github.com/RUHULAMIN2024/A-2.git"
- Install Dependencies: "npm install"
- Set Up Environment Variables: "Create a .env file and add: 'NODE_ENV=development', 'PORT=5000', 'DATABASE_URL=.....' "
- Start the Server: "npm run dev"

## API Endpoints

#### Products:

- POST /api/products - Add a new bike.
- GET /api/products - View all bikes.
- GET /api/products/:productId - View a specific bike.
- PUT /api/products/:productId - Update a bike.
- DELETE /api/products/:productId - Delete a bike.

#### Orders:

- POST /api/orders - Place an order.
- GET /api/orders - View all order.
- GET /api/orders/:orderId - View a specific order.
- PUT /api/orders/:orderId - Update a order.
- DELETE /api/orders/:orderId - Delete a order.
- GET /api/orders/revenue - Calculate total revenue.
