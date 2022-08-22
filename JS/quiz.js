class myGame{

    constructor(){
        this.userName = ""; //Nome do jogador//
        this.score = 0;   //Score do jogador para fechamento final dos pontos//
        this.paiMae = "" //Informação para links relacionados a paternidade
        this.acertos = 0 //Informará quantas perguntas foram acertadas
        this.perguntaAtual = {}
        this.perguntas = [
            {
                pergunta:"Quais especialistas podem diagnosticar e tratar TDAH",
                escolha1:"Psicólogos",
                escolha2:"Psiquiatras",
                escolha3:"Neurologistas",
                escolha4:"Pediatras",
                escolha5:"Todas opções",
                resposta:"Todas opções",
            },
            {
                pergunta:"Quais especialistas podem diagnosticar e tratar TDAH",
                escolha1:"Psicólogos",
                escolha2:"Psiquiatras",
                escolha3:"Neurologistas",
                escolha4:"Pediatras",
                escolha5:"Todas opções",
                resposta:"Todas opções",
            }
        ]
    }


}