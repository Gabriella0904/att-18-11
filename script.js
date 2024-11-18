document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!username || !password) {
      document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
    } else {
      document.getElementById('message').textContent = 'Login realizado com sucesso!';
    }
  });
  