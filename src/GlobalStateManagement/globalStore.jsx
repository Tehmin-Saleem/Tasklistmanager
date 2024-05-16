import { proxy } from 'valtio';

const storedToken = localStorage.getItem('token') || null;
const storedRole = localStorage.getItem('role') || 'admin'; // Default role should match the schema
const storedName = localStorage.getItem('name', 'tehmina'); // Default empty string for name if not found

const authStore = proxy({
  token: storedToken,
  role: storedRole,
  isAuthenticated: !!storedToken, // Check if token exists for authentication
  name: storedName,
});

export default authStore;
