// parâmetros/argumentos
// retorno
console.log(exibeInfosEstudante('Antonio', 10));
console.log(exibeInfosEstudante('Carlos', 7));

function exibeInfosEstudante(nome, nota) {
  return `o nome é ${nome} e a nota é ${nota}`;
}

// hoisting