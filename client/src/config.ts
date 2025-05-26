// API Configuration
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://server-underthearch.onrender.com' 
  : 'http://localhost:5000';

// For debugging
console.log('API Base URL:', API_BASE_URL);

// Other configuration constants can be added here