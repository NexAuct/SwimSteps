
import { db, handleDatabaseError } from '../db.js';

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
    const body = await request.json();
    const { name, age, location, time, contact } = body;

    // Validate required fields
    if (!name || !age || !contact) {
      return new Response(JSON.stringify({ 
        error: 'Missing required fields' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Insert new booking
    const result = await db`
      INSERT INTO bookings (name, age, location, time, contact, status)
      VALUES (${name}, ${age}, ${location}, ${time}, ${contact}, 'Pending')
      RETURNING *
    `;

    return new Response(JSON.stringify({
      success: true,
      booking: result[0]
    }), {
      status: 201,
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
