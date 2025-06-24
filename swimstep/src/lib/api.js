import axios from 'axios';

const API_BASE_URL = '/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Bookings API
export const bookingsAPI = {
  // Create a new booking
  create: async (bookingData) => {
    try {
      const response = await api.post('/bookings/create', bookingData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to create booking');
    }
  },

  // Get all bookings
  list: async () => {
    try {
      const response = await api.get('/bookings/list');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to fetch bookings');
    }
  },

  // Update booking status
  updateStatus: async (id, status) => {
    try {
      const response = await api.put('/bookings/update', { id, status });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to update booking');
    }
  },

  // Delete a booking
  delete: async (id) => {
    try {
      const response = await api.delete('/bookings/delete', { data: { id } });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to delete booking');
    }
  },
};

export default api;
