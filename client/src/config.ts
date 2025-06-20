// API Configuration
export const API_BASE_URL = 
  process.env.NODE_ENV === 'development' 
    ? 'http://localhost:5000' 
    : 'https://api.underthearch.in';

// For debugging
console.log('API Base URL:', API_BASE_URL);

// Other configuration constants can be added here