
import { proxy } from 'valtio';

const authStore = proxy({
  token: localStorage.getItem('token') || null,
  role: localStorage.getItem('role') || 'admin', // Default role should match the schema
  isAuthenticated: !!localStorage.getItem('token'),
  name:localStorage.getItem('name')
});
export default authStore;

