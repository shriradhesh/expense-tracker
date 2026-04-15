export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: `${API_URL}/auth/register`,
    LOGIN: `${API_URL}/auth/login`,
  },
  EXPENSES: {
    BASE: `${API_URL}/expenses`,
    SUMMARY: `${API_URL}/expenses/summary`,
  }
};