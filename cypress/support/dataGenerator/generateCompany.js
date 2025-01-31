const faker = require('faker-br');

// Função para gerar os dados cadastrais da empresa
function gerarDadosEmpresa() {
  const cnpj = faker.br.cnpj();  // Gerar CNPJ válido
  const nomeEmpresa = faker.company.companyName();  // Gerar nome da empresa
  const email = gerarEmail();  // Gerar email com domínio fixo 'empresaQA'
  const celular = gerarCelular();  // Gerar número de telefone com DDD válido

  return {
    cnpj,
    nomeEmpresa,
    email,
    celular,
  }
}

function gerarCelular() {
  const ddd = faker.random.number({ min: 11, max: 99 }); // DDD válido
  const numero = '9' + faker.random.number({ min: 10000000, max: 99999999 }); // Número de celular válido
  return `(${ddd}) ${numero.slice(0, 5)}-${numero.slice(5)}`;
}

// Função para remover acentuação e caracteres especiais
function removerAcentuacao(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para gerar um email com domínio 'cashmeQA.com'
function gerarEmail() {
  let nomeUsuario = faker.internet.userName();
  nomeUsuario = removerAcentuacao(nomeUsuario); // Remove acentuação do nome do usuário
  return `${nomeUsuario}QA@cashme.com.br`;
}

// Chamar a função para gerar e exibir os dados
module.exports = {gerarDadosEmpresa}