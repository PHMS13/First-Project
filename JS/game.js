class myGame {
  constructor() {
    this.userName = ""; //Nome do jogador//
    this.score = 0; //Score do jogador para fechamento final dos pontos//
    this.paiMae = ""; //Informação para links relacionados a paternidade
    this.acertos = 0; //Informará quantas perguntas foram acertadas
    this.questaoAtual = {};
    this.contadorQuestoes = 0;
    this.questoesDisponiveis = [];
    this.maximoPerguntas = 10;
    this.acertoQuestao = true;
    this.pontosAcerto = 0;

    this.perguntas = [
      {
        pergunta: "Quais especialistas podem diagnosticar e tratar TDAH",
        escolha1: "Psicólogos",
        escolha2: "Psiquiatras",
        escolha3: "Neurologistas",
        escolha4: "Pediatras",
        escolha5: "Todas opções",
        resposta: "Todas opções",
      },
      {
        pergunta: "Qual destas personalidades NÃO possue TDAH",
        escolha1: "Bill Gates",
        escolha2: "Jin Carrey",
        escolha3: "Michael Phelps",
        escolha4: "Richard Brenson",
        escolha5: "Tiger Woods",
        resposta: "Tiger Woods",
      },
    ];
  }

  Iniciandojogo(){startGame = () => {
    this.contadorQuestoes = 0;
    this.score = 0;
    this.questoesDisponiveis = [...this.perguntas];
    pegarNovasPerguntas();
  };
  }

  trazendoNovaPergunta() {
    pegarNovasPerguntas = () => {
      if (
        this.questoesDisponiveis === 0 ||
        this.contadorQuestoes > this.maximoPerguntas
      ) {
        localStorage.setItem("mostRecentScore", score);

        return window.location.assign("/end.html");
      }
      contadorQuestoes++;
      progressText.innerText = `questão ${this.contadorQuestoes} de ${this.maximoPerguntas}`;
      progressBarFull.Style.width = `${
        (this.contadorQuestoes / this.maximoPerguntas) * 100
      }%`;

      const indexDaPergunta = Math.floor(
        math.random() * this.questoesDisponiveis.length
      );
      this.questaoAtual = this.questoesDisponiveis[indexDaPergunta];
      question.innerText = this.questaoAtual.question;

      choices.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
      });
      this.questoesDisponiveis.splice(indexDaPergunta, 1);
      this.acertoQuestao = true;
    };
  }

  Verificandoacerto() {
    choices.forEach((choice) => {
      choice.addEventListener("click", (e) => {
        if (!acertoQuestao) {
          return;
        }
        acertoQuestao = false;
        const escolhaSelecionada = e.target;
        const respostaSelecionada = escolhaSelecionada.dataset["number"];

        //verificar let abaixo
        let classToAply =
          respostaSelecionada == questaoAtual.resposta
            ? 'correct'
            : 'incorrect';

        if (classToAply === 'correct') {
          incrementScore(pontosAcerto);
        }
        escolhaSelecionada.parentElement.classList.add(ClasstoApply)
        setTimeout(()=>{
            escolhaSelecionada.parentElement.classList.remove(classToAply)
            pegarNovasPerguntas()
        },1000)
      });
    });
  }

}
