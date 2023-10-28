const express = require('express')
const app = express()
const mysql = require("mysql2/promise")
app.use(express.json())


const connection = mysql.createConnection({
  host: 'db.kasparyan.freeddns.org',
  port: 53306,
  user: 'caio',
  password: 'Techers123$',
  database: 'caio_tcc'
});

/*
document.getElementById('loginsub').addEventListener('click', function () {
  event.preventDefault();
  const { user, senha, sended } = send();
  
  if (sended) {
    // Faça o que precisa ser feito quando for clicado
    console.log('Clicado!');
    console.log('Usuário:', user);
    console.log('Senha:', senha);
  } else {
    // Faça o que precisa ser feito quando não for clicado
    console.log('Não clicado!');
  }
});
*/
app.post("/login", async (req, res) => {
  if(localStorage.getItem("sessionID") == null){
    window.alert("Você precisa fazer login")
  }

  const email = req.body.emailvalue
  const senha = req.body.passvalue

  if (email === "") {
    res.status(400).json({ message: "o campo de email é necessário" })
  }
  if (senha === "") {
    res.status(400).json({ message: "o campo de email é necessário" })
  }

  res.json({})

  const consulta = " SELECT * FROM `Users` WHERE `Email` = ? AND `Password` = ?"

  const results = await (await connection).execute(consulta, [email, senha])
    
  console.log(results)
    if (results[0].length == 0) {
      console.log("erro no login"); return;
    }
    else { console.log("logado com sucesso");}

  const sessionID = crypto.randomBytes(32).toString('hex');
  localStorage.setItem("sessionID", sessionID);
})

app.use(express.static('public'));
app.listen(80);
