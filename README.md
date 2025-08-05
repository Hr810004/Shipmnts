# Shipmnts API Boilerplate

A clean and scalable Node.js/Express boilerplate with MongoDB for RESTful API development. Perfect for coding interviews and rapid prototyping.

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp env.example .env
   # Add your MongoDB URI to .env file
   ```

3. **Start the server**
   ```bash
   npm run dev
   ```

## Project Structure

```
├── config/
│   └── database.js    # MongoDB connection configuration
├── models/            # MongoDB schemas and models
│     
├── routes/
│   └── index.js      # Main API routes
├── server.js         # Express server setup
├── package.json      # Dependencies and scripts
└── README.md         # This file
```

## API Endpoints

- `GET /health` - Server health status
- `GET /api/v1` - API information

## MongoDB Setup

- **ODM**: Mongoose for MongoDB object modeling
- **Connection**: Established automatically on server startup
- **Environment Variable**: `MONGODB_URI`

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Environment**: dotenv for configuration

## Interview Guidelines

- **Duration**: 1.5 hours
- **Requirements**: Screen sharing, webcam on
- **Testing Tool**: Postman for API testing
- **Stack**: Node.js/Express + MongoDB

## Important Notes

- This is a **boilerplate** - NO business logic included
- Modify based on the problem statement provided during the interview
- Test the setup before the interview
- Ensure MongoDB is running and accessible

## Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests (if configured)

## Environment Variables

Create a `.env` file with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
NODE_ENV=development
``` 