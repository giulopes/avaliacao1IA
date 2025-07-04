// Seleção dos elementos do DOM
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.getElementById("botaoIniciar");

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Lista de perguntas
const perguntas = [
  {
    enunciado: "Você costuma participar de ações sociais ou comunitárias?",
    alternativas: [
      {
        texto: "Sim, sempre que posso.",
        afirmacao:
          "Você acredita que participar de ações sociais fortalece a comunidade e promove empatia entre as pessoas."
      },
      {
        texto: "Não, raramente participo.",
        afirmacao:
          "Você reconhece a importância das ações sociais, mas ainda busca maneiras de se envolver mais ativamente."
      }
    ]
  },
  {
    enunciado: "O que você considera mais importante em ações coletivas?",
    alternativas: [
      {
        texto: "Ajudar quem mais precisa.",
        afirmacao:
          "Você valoriza o impacto direto que as ações coletivas têm na vida de pessoas em situação de vulnerabilidade."
      },
      {
        texto: "Criar união entre os membros da comunidade.",
        afirmacao:
          "Você acredita que as ações coletivas têm o poder de unir as pessoas e criar redes de apoio."
      }
    ]
  },
  {
    enunciado: "Como você costuma contribuir para o bem-estar social?",
    alternativas: [
      {
        texto: "Com doações (alimentos, roupas, dinheiro).",
        afirmacao:
          "Sua forma de ajudar está ligada a gestos práticos e solidários que fazem diferença na vida de quem precisa."
      },
      {
        texto: "Com o seu tempo e presença (voluntariado, visitas, apoio emocional).",
        afirmacao:
          "Você acredita que estar presente e oferecer apoio emocional é tão importante quanto doações materiais."
      }
    ]
  },
  {
    enunciado: "Qual seu sentimento ao ver uma comunidade se mobilizando por uma causa?",
    alternativas: [
      {
        texto: "Inspiração.",
        afirmacao:
          "Você se sente inspirado ao ver pessoas se unindo por algo maior, acreditando na força da coletividade."
      },
      {
        texto: "Esperança.",
        afirmacao:
          "Você sente que, quando a comunidade se une, há esperança de um futuro mais justo e solidário."
      }
    ]
  },
  {
    enunciado: "Você acredita que pequenas atitudes coletivas podem gerar grandes mudanças sociais?",
    alternativas: [
      {
        texto: "Sim, com certeza.",
        afirmacao:
          "Você acredita que a transformação social começa com pequenas atitudes que, somadas, geram grandes impactos."
      },
      {
        texto: "Depende do engajamento de todos.",
        afirmacao:
          "Você entende que as mudanças sociais só acontecem de verdade quando há participação ativa da maioria."
      }
    ]
  }
];

// Variáveis de controle
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Função para mostrar a pergunta atual
function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.innerHTML = "";
  mostraAlternativas();
}

// Função para mostrar as alternativas da pergunta atual
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botao = document.createElement("button");
    botao.textContent = alternativa.texto;
    botao.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botao);
  }
}

// Função chamada ao selecionar uma alternativa
function respostaSelecionada(opcao) {
  historiaFinal += opcao.afirmacao + " ";
  atual++;
  mostraPergunta();
}

// Função para mostrar o resultado final
function mostraResultado() {
  caixaPerguntas.textContent = "Seu perfil social:";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.innerHTML = "";
}

// Evento para iniciar o questionário
botaoIniciar.addEventListener("click", () => {
  telaInicial.style.display = "none";
  mostraPergunta();
});