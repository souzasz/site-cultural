const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual festa cultural você prefere?",
        alternativas: [
            {
                texto: "Festa junina",
                afirmacao: "Comemorada durante todo o mês de junho, a festa junina é a mais típica, comemorada em todo o Brasil, conta com danças, comidas típicas, entre outros."
            },
            {
                texto: "Folia de reis",
                afirmacao: "Relembrando a visita dos reis magos ao menino Jesus, a festa engloba músicas, orações, danças, comidas típicas, entre outros."
            }
        
        ]    
    },
    {
        enunciado: "Você gosta de dançar quadrilha ou reisado?",
        alternativas: [
          {
                texto: "Quadrilha",
                afirmacao: "Trata-se de uma dança coletiva em pares, que possui uma coreografia específica baseada em passos tradicionais e um orador, que proclama frases divertidas que determinam os movimentos da dança."
          },
          {
                texto: "Reisado",
                afirmacao: "Formado por um cortejo composto por dois cordões, em comemoração ao nascimento do menino Jesus e em homenagem dos reis magos, tendo como personagens principais o rei e a rainha."
          }
        ]
    },
    {
        enunciado: "Que tal conhecer algumas comidas das festas?",
        alternativas: [
            {
                texto: "Junina",
                afirmacao: "Comidas derivadas de milho e amendoim, bolos, maçã do amor, cachorro-quente, arroz-doce, quentão, canjica, entre outros."
            },
            {
                texto: "Folia de Reis",
                afirmacao: "Costuma-se encontrar arroz, feijão, macarronada, carnes e verduras."
            }
            
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();