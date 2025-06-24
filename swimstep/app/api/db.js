import { sql } from '@vercel/postgres';

// Database connection using Vercel Postgres
export const db = sql;

// Initialize database schema
export async function initializeDatabase() {
  try {
    // Create bookings table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        age VARCHAR(50) NOT NULL,
        location VARCHAR(255),
        time VARCHAR(255),
        contact VARCHAR(255) NOT NULL,
        status VARCHAR(50) DEFAULT 'Pending',
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    console.log('Database initialized successfully');
    return { success: true };
  } catch (error) {
    console.error('Database initialization error:', error);
    return { success: false, error: error.message };
  }
}

// Helper function to handle database errors
export function handleDatabaseError(error) {
  console.error('Database error:', error);
  return {
    success: false,
    error: 'Database operation failed',
    details: process.env.NODE_ENV === 'development' ? error.message : undefined
  };
}
