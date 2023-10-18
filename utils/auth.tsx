import axios from 'axios';

const request = async (method, url, data = null, token = null) => {
  const config = { method, url, data, headers: {} };
  if (token) {
    config.headers['Authorization'] = token;
  }
  try {
    const response = await axios(config);
    return [response.data, null];
  } catch (error) {
    console.error(`${method} request to ${url} failed:`, error);
    return [null, error];
  }
};

export const isLoggedIn = async (token) => {
  const [data, error] = await request('GET', 'http://localhost:8080/api/validate', null, token);
  return !error && data;
};

export const login = async (email, password) => {
  const [data, error] = await request('POST', 'http://localhost:8080/api/login', { email, password });
  if (data && data.token) {
    localStorage.setItem('token', data.token);
  }
  return data ? data.token : null;
};

export const logout = () => {
  localStorage.removeItem('token');
  // Optionally call logout endpoint to invalidate server-side token
};
