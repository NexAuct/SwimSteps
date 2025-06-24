
import { initializeDatabase } from './db.js';

export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const result = await initializeDatabase();
    
    if (result.success) {
      return new Response(JSON.stringify({
        success: true,
        message: 'Database initialized successfully'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('Database initialization error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to initialize database',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
