//comparação entre 2 strings

let fruta1 = "maçã";
let fruta2 = "abacaxi";

if(fruta1<fruta2){
  console.log(fruta1+", "+fruta2);
}else{
  console.log(fruta2+", "+fruta1);
}

//switch
var valor = 1;
switch(valor){
  case 1:
    console.log("um");
  break;
  case 2:
    console.log("dois");
  break;
  default:
    console.log("nenhum");
  break;
}

//for
for(let i = 0; i < 10; i++){
  if(i === 1){
    console.log((i+1)+" carneirinho");
  } else{
    console.log((i+1)+" carneirinhos");
  }
}

//while
let vida = 10;
while(vida-->0){
  console.log("Há esperança.");
}

//do-while
let k = 0;
do{
  console.log(k);
  k--;
} while(k>0);
