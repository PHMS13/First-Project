//instanciando a classe
const gamequiz = new myGame();
//variáveis referentes ao inicio
const inicio = document.querySelector("#inicio");
const inputName = document.querySelector("#homeInput");
const buttonStart = document.querySelector("#btnStart");
const voltarInicio = document.querySelector("#voltarInicio");
const game = document.querySelector("#game");
const fimDeJogo = document.querySelector("#fimDeJogo");
const name = document.querySelector("#name");
const tentativas = document.querySelector("#points");
// selecionará o campo question]

const question = document.querySelector("#question");
//está puxando todas choice-text e as transformando em array
const choices = Array.from(document.querySelectorAll(".choice-text"));

buttonStart.addEventListener("click", () => {
  if (inputName.value === "") {
    return;
  }

  gamequiz.userName = inputName.value;
  name.innerText = gamequiz.userName;

  console.log(gamequiz.userName);
  //apagar a tela de inicio
  fimDeJogo.display = "none";
  inicio.style.display = "none";
  game.style.display = "flex";

  gamequiz.Iniciandojogo();
});

const botoesResposta = document.querySelectorAll(".choice-container");
botoesResposta.forEach((botao) => {
  botao.addEventListener("click", () => {
    gamequiz.Verificandoacerto(botao);
    tentativas.innerText = gamequiz.tentativas;
  });
});

const proxPer = document.querySelector("#proximaPergunta");
proxPer.addEventListener("click", () => {
  gamequiz.proxima();
});

voltarInicio.addEventListener("click", () => {
  window.alert("quer jogar de novo ? clique ok");
  location.reload();
});
