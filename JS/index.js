const game = new myGame();

// selecionará o campo question
const question = document.querySelector("#question");
//está puxando todas choice-text e as transformando em array
const choices = Array.from(document.querySelectorAll(".choice-text"));
//Variáveis abaixo relacinadas a barra de progresso das perguntas
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
