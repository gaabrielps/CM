const faker = require('faker-br');

// Função para gerar os dados cadastrais da empresa
function gerarDadosEmpresa() {
  const cnpj = faker.br.cnpj();
  const nomeEmpresa = `${faker.company.companyName()} ltda`; // Adiciona 'ltda' ao nome
  const email = gerarEmail();
  const celular = gerarCelular();

  return {
    cnpj,
    nomeEmpresa,
    email,
    celular,
  };
}

// ... (restante das funções permanece igual)
function gerarCelular() {
  const ddd = faker.random.number({ min: 11, max: 12 });
  const numero = '9' + faker.random.number({ min: 10000000, max: 99999999 });
  return `(${ddd}) ${numero.slice(0, 5)}-${numero.slice(5)}`;
}

function removerAcentuacao(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function gerarEmail() {
  let nomeUsuario = faker.internet.userName();
  nomeUsuario = removerAcentuacao(nomeUsuario);
  return `${nomeUsuario}QA@cashme.com.br`;
}

module.exports = { gerarDadosEmpresa };