const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const qtdAluno = 0;

rl.question('Quantidade de alunos? ', (qtdAluno) => {
  // TODO: Log the answer in a database
  console.log(`Quantidade de aluno informada: ${qtdAluno}`);
  rl.close();
  
  for (let x = 0; x <= qtdAluno; x++) {
    if(x == 0){
        console.log("Numero: " + x + " é zero")
    } else if (x % 2 == 0) {
        console.log("Numero: " + x + " é par")
    } else { 
        console.log("Numero: " + x + " é impar")
    }
  }
});


