function soma(x,y){
  console.log(x+y);
}

function subtracao(x,y){
  return x-y;
}

// função passada como parâmetro
function operacao(op, valor1, valor2){
  op(valor1, valor2);
}

operacao(soma, 1, 2);

operacao((a,b) => soma(a,b),1,2); // tem o mesmo resultado da linha 14

operacao(subtracao, 1, 2);

operacao((a,b) => console.log(subtracao(a,b)),1,2); // tem o mesmo resultado da linha 18
