// API Configuration
// Use localhost for development and the VPS URL for production
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
export const API_BASE_URL = import.meta.env.VITE_API_URL || (isDevelopment ? 'http://localhost:5000' : 'https://underthearch-22pt.onrender.com');

// Other configuration constants can be added here