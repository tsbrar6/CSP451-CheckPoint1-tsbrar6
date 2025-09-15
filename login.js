// Simple client-side validation (no backend)
const form = document.getElementById('loginForm');
const user = document.getElementById('username');
const pass = document.getElementById('password');
const status = document.getElementById('status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!user.value || !pass.value) {
    status.textContent = 'Please fill in both fields.';
    status.className = 'error';
    return;
  }
  if (pass.value.length < 6) {
    status.textContent = 'Password must be at least 6 characters.';
    status.className = 'error';
    return;
  }
  status.textContent = `Welcome, ${user.value}! (demo only)`;
  status.className = '';
});
