class myGame {
  constructor() {
    this.userName = ""; //Nome do jogador//
    this.tentativas = 0; //Score do jogador para fechamento final dos pontos//
    this.paiMae = ""; //Informação para links relacionados a paternidade
    this.acertos = 0; //Informará quantas perguntas foram acertadas
    this.questaoAtual = {};
    this.contadorQuestoes = 0;
    this.questoesDisponiveis = [];
    this.acertoQuestao = true;
    this.pontosAcerto = 0;

    this.perguntas = [
      {
        //1
        pergunta: "Quais especialistas podem diagnosticar e tratar TDAH?",
        escolha1: "Psicólogos.",
        escolha2: "Psiquiatras.",
        escolha3: "Neurologistas.",
        escolha4: "Pediatras.",
        escolha5: "Todas as opções apresentadas.",
        resposta: "Todas as opções apresentadas.",
      },
      {
        //2
        pergunta: "Qual destas personalidades NÃO possui TDAH?",
        escolha1: "Bill Gates (ex CEO da Microsoft).",
        escolha2: "Jin Carrey (ator).",
        escolha3: "Michael Phelps (maior medalhista olimpico da história).",
        escolha4: "Richard Brenson (fundador e ex CEO do grupo Virgin).",
        escolha5: "Tiger Woods (maior golfista da atualidade).",
        resposta: "Tiger Woods (maior golfista da atualidade).",
      },
      {
        //3
        pergunta:
          "O transtorno de déficit de atenção com hiperatividade (TDAH) envolve má capacidade de concentração, excesso de atividade e impulsividade impróprias para a idade da criança. Esses sintomas interferem no desempenho e desenvolvimento da criança. Qual das seguintes opções é uma afirmação correta sobre o TDAH?",
        escolha1:
          "O TDAH é um problema comportamental que, com treino, pode ser suprimido nas crianças.",
        escolha2:
          "O TDAH é um distúrbio cerebral presente desde o nascimento ou que se desenvolve logo depois.",
        escolha3:
          "Foi demonstrado que alimentos como aditivos e açúcar causam TDAH.",
        escolha4:
          "O diagnóstico de TDAH é confirmado com cintilografias do cérebro e exames laboratoriais.",
        escolha5:
          "O TDAH é um invenção dos laboratórios famacêuticos para lucrar mais com a venda de medicamentos",
        resposta:
          "O TDAH é um distúrbio cerebral presente desde o nascimento ou que se desenvolve logo depois.",
      },
      {
        //4
        pergunta: "Qual das opções a seguir NÃO é um sintoma de TDAH?",
        escolha1: "Inquietação.",
        escolha2: "Agressividade.",
        escolha3: "Impulsividade.",
        escolha4: "Esquecimento.",
        escolha5: "Incapacidade de se concentrar.",
        resposta: "Agressividade.",
      },
      {
        //5
        pergunta:
          "Qual das seguintes opções é a classe de medicamentos mais eficaz usada para tratar TDAH?",
        escolha1: "Medicamentos usados para tratar hipertensão arterial.",
        escolha2: "Medicamentos ansiolíticos.",
        escolha3: "Antidepressivos.",
        escolha4: "Psicoestimulantes.",
        escolha5: "Analgésicos.",
        resposta: "Psicoestimulantes.",
      },
      {
        //6
        pergunta:
          "Geralmente crianças com TDAH apresentam comorbidade com outros transtornos?",
        escolha1: "Não, geralmente não apresentam outros transtornos.",
        escolha2: "Sim, todas apresentam comorbidade.",
        escolha3:
          "Sim, pesquisas estimam que 70% das crianças com TDAH apresentam outra comorbidade e pelo menos 10% apresentam três ou mais comorbidades",
        escolha4: "Sim, mas geralmente menos de 5% apresentam transtornos",
        escolha5: "Ainda não se sabe.",
        resposta:
          "Sim, pesquisas estimam que 70% das crianças com TDAH apresentam outra comorbidade e pelo menos 10% apresentam três ou mais comorbidades",
      },
      {
        //7
        pergunta: "Em que faze da vida o TDAH se manifesta?",
        escolha1: "O transtorno surge na infância e tem raízes hereditárias.",
        escolha2: "Na terceira idade.",
        escolha3: "No inicio da faze adulta.",
        escolha4: "Na adolescencia, proxímo aos 15 anos de idade.",
        escolha5: "Não há idade determinada",
        resposta: "O transtorno surge na infância e tem raízes hereditárias.",
      },
      {
        ///8
        pergunta:
          "Qual é a melhor idade para se começar o diagnostico de TDAH>",
        escolha1: "A partir de 7 anos.",
        escolha2: "A partir de 4 anos.",
        escolha3: "A partir de 1 ano.",
        escolha4: "A partir de 10 anos.",
        escolha5: "Qualquer idade da infância.",
        resposta: "A partir de 7 anos.",
      },
      {
        //9
        pergunta:
          "Em média quantos % das crianças com TDAH levarão o transtorno para a vida adulta?",
        escolha1: "10%.",
        escolha2: "30%.",
        escolha3: "80%.",
        escolha4: "75%.",
        escolha5: "60%.",
        resposta: "60%.",
      },
      {
        //10
        pergunta: "O TDAH tem cura?",
        escolha1: "Sim, geralmente após 1 ano de tratamento.",
        escolha2: "Sim, geralmente após menos de 1 ano de tratamento.",
        escolha3:
          "Não possui cura mas há como tratar os sintomas com medicamentos e acompanhamento psicológico.",
        escolha4: "Ainda não se sabe.",
        escolha5: "Sim, após 3 anos de tratamento",
        resposta:
          "Não possui cura mas há como tratar os sintomas com medicamentos e acompanhamento psicológico.",
      },
    ];
  }

  Iniciandojogo() {
    const startGame = () => {
      this.contadorQuestoes = 0;
      this.tentativas = 0;
      this.questoesDisponiveis = [...this.perguntas];
      this.trazendoNovaPergunta();
    };
    startGame();
  }
  //traz a nova pergunta
  trazendoNovaPergunta() {
    //esconde o botão de próxima pergunta
    proximaPergunta.style.display = "none";

    //
    this.questaoAtual = this.questoesDisponiveis[this.contadorQuestoes];
    const Question = document.querySelector("#Question");
    Question.innerText = this.questaoAtual.pergunta;
    console.log(this.questaoAtual);

    const resposta1 = document.querySelector("#choice1");
    console.log(choice1);
    resposta1.innerText = this.questaoAtual.escolha1;

    const resposta2 = document.querySelector("#choice2");
    resposta2.innerText = this.questaoAtual.escolha2;

    const resposta3 = document.querySelector("#choice3");
    resposta3.innerText = this.questaoAtual.escolha3;

    const resposta4 = document.querySelector("#choice4");
    resposta4.innerText = this.questaoAtual.escolha4;

    const resposta5 = document.querySelector("#choice5");
    resposta5.innerText = this.questaoAtual.escolha5;
  }

  Verificandoacerto(btn) {
    console.log(btn);

    let escolha = btn.querySelector(".choice-text");
    console.log(escolha);
    if (escolha.innerText === this.questaoAtual.resposta) {
      
      escolha.classList.add("correto");
      setTimeout(() => {
        escolha.classList.remove("correto");
      }, 500);

      proximaPergunta.style.display = "flex";
      this.tentativas++;
      

      if (this.contadorQuestoes === this.perguntas.length - 1) {
        console.log("perguntas acabaram");
        proximaPergunta.style.display = "none";
        setTimeout(() => {
          fimDeJogo.style.display = "flex";
          game.style.display = "none";
        }, 1000);
        return;
      }

      proximaPergunta.style.display = "flex";
    } else {
      console.log("errou");
      escolha.classList.add("incorreto");
      setTimeout(() => {
        escolha.classList.remove("incorreto");
      }, 1000);
      this.tentativas++;
    }
  }

  proxima() {
    this.contadorQuestoes++;
    this.trazendoNovaPergunta();
  }
}
