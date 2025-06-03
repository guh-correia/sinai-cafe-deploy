const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'IP_DO_VPS',
  user: 'app_user',
  password: 'senhaSegura123',
  database: 'clientes_db'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});
