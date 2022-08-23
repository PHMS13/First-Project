//instanciando a classe
const gamequiz = new myGame();
//variáveis referentes ao inicio
const inicio = document.querySelector("#inicio");
const inputName = document.querySelector("#home input");
const buttonStart = document.querySelector("#btnStart");
const game = document.querySelector("#game");
// selecionará o campo question]

const question = document.querySelector("#question");
//está puxando todas choice-text e as transformando em array
const choices = Array.from(document.querySelectorAll(".choice-text"));
//Variáveis abaixo relacinadas a barra de progresso das perguntas
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

buttonStart.addEventListener("click", () => {
  if (inputName.value === "") {
    return;
  }
  console.log("tá indo??");

  //apagar a tela de inicio
  inicio.style.display = "none";
  game.style.display = "flex";

  
});
