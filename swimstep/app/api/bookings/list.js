import { db, handleDatabaseError } from '../db.js';

export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Get all bookings ordered by submission date (newest first)
    const result = await db`
      SELECT * FROM bookings 
      ORDER BY submitted_at DESC
    `;

    return new Response(JSON.stringify({
      success: true,
      bookings: result
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    const errorResponse = handleDatabaseError(error);
    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
