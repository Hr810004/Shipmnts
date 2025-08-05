# Shipmnts API Boilerplate

Simple Node.js/Express boilerplate with MongoDB for RESTful API development.

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
├── config/database.js    # MongoDB connection
├── models/              # MongoDB schemas
│   └── User.js         # Sample User model
├── routes/index.js      # Main routes
├── server.js           # Main server
└── package.json        # Dependencies
```

## API Endpoints

- `GET /health` - Server health status
- `GET /api/v1` - API information

## MongoDB Setup

- Uses Mongoose ODM
- Connection established on server startup
- Sample User model included
- Environment variable: `MONGODB_URI`

## Interview Notes

- **Duration**: 1.5 hours
- **Requirements**: Screen sharing, webcam on
- **Tools**: Postman for testing
- **Stack**: Node.js/Express + MongoDB

## Important

- This is a boilerplate - NO business logic included
- Modify based on the problem statement provided during the interview
- Test the setup before the interview 