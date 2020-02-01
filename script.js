function carregarHistorico() {
  if (!localStorage.getItem('historico')) {
    localStorage.setItem('historico', []);
  }
}

function calcular(event) {
  event.preventDefault();

  const numPessoas = pegarValor('#people');
  const numHoras = pegarValor('#hours');

  const numComida = (100 * numPessoas)/numHoras;
  const numLatinha = (1 * numPessoas)/numHoras;
  const numRefri = (100 * numPessoas)/numHoras;

  exibirValores(numComida, numLatinha, numRefri);
}

function pegarValor(selector) {
  const input = document.querySelector(selector);

  return parseInt(input.value);
}

function exibirValores(comida, latinha, refri) {
  document.querySelector('#numComida').innerHTML = `${comida}g de comida.`;
  document.querySelector('#numLatinha').innerHTML = `${latinha} latinha(s) de cerveja.`;
  document.querySelector('#numRefri').innerHTML = `${refri}ml de refrigerante.`;

  document.querySelector('#result').style.display = 'block';
}

function adicionarHistorico(comida, latinha, refri) {
  const churrasco = {
    comida,
    latinha,
    refri,
    date: new Date()
  };

  let historico = localStorage.getItem('historico');
  historico.push(churrasco)

  localStorage.setItem('historico', historico);
}