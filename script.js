const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal fonte de energia renovável??",
        alternativas: [
            {
                texto: "a) Energia solar",
                afirmacao: "esta correta. "
            },
            {
                texto: "Energia nuclear",
                afirmacao: "esta incorreto."
            }
        ]
    },
    {
        enunciado: "Qual é um dos maiores responsáveis pelo aquecimento global?",
        alternativas: [
            {
                texto: "Emissões de gases de efeito estufa",
                afirmacao: "esta correta"
            },
            {
                texto: "uso de energia eólica",
                afirmacao: "esta incorreta."
            }
        ]
    },
    {
        enunciado: "Qual é o principal efeito do desmatamento na biodiversidade?

?",
        alternativas: [
            {
                texto: "Aumento da biodiversidade",
                afirmacao: "esta correto
            },
            {
                texto: "Perda de habitats e espécies",
                afirmacao: "esta incorreta"
            }
        ]
    },
    {
        enunciado: "Qual das seguintes práticas ajuda a conservar água?",
        alternativas: [
            {
                texto: "Deixar a torneira aberta enquanto escova os dentes",
                afirmacao: "esta correta."
            },
            {
                texto: "Reutilizar a água da chuva para regar plantas.",
                afirmacao: "esta incorreta
            }
        ]
    },
    {
        enunciado: "Qual é uma forma eficiente de reduzir a quantidade de resíduos sólidos?

? ",
        alternativas: [
            {
                texto: Jogar tudo no lixo comum",
                afirmacao: "esta correta"
            },
            {
                texto: "Praticar a reciclagem e compostagem.",
                afirmacao: "esta incorreta "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
