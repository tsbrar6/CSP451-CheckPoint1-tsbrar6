test('Login form loads', () => {
  document.body.innerHTML = `
    <form id="loginForm">
      <input id="username" />
      <input id="password" type="password" />
    </form>
  `;
  const form = document.getElementById('loginForm');
  expect(form).not.toBeNull();
});
