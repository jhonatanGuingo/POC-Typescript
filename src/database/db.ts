import pg from "pg";

const { Pool } = pg;

const db = new Pool({
    host: "localhost",
    port: 5432,
    user: "shortly_role",
    password: "123456",
    database: "poc_ts"
})

export { db };


async function testarConexao() {
  try {
    // Realiza uma consulta simples ao banco de dados (por exemplo, selecionando a versão do PostgreSQL)
    const resultado = await db.query('SELECT version()');

    // Se a consulta foi bem-sucedida, a conexão está funcionando
    console.log('Conexão bem-sucedida!');

  } catch (err) {
    // Se ocorrer um erro, a conexão não foi bem-sucedida
    console.error('Erro ao conectar ao PostgreSQL:', err);
  } 
}

// Chama a função para verificar a conexão
testarConexao();