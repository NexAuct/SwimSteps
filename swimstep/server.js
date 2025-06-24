import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Import API handlers
import initHandler from './app/api/init.js';
import createHandler from './app/api/bookings/create.js';
import listHandler from './app/api/bookings/list.js';
import updateHandler from './app/api/bookings/update.js';
import deleteHandler from './app/api/bookings/delete.js';

// Convert Vercel handlers to Express middleware
const convertHandler = (handler) => async (req, res) => {
  try {
    const request = new Request(`http://localhost:${PORT}${req.url}`, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });

    const response = await handler(request);
    const data = await response.text();
    
    res.status(response.status);
    res.set('Content-Type', 'application/json');
    res.send(data);
  } catch (error) {
    console.error('Handler error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// API routes
app.post('/api/init', convertHandler(initHandler));
app.post('/api/bookings/create', convertHandler(createHandler));
app.get('/api/bookings/list', convertHandler(listHandler));
app.put('/api/bookings/update', convertHandler(updateHandler));
app.delete('/api/bookings/delete', convertHandler(deleteHandler));

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
