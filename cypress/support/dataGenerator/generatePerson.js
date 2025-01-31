const faker = require('faker-br');

function gerarDadosPessoais() {
  const nomeCompleto = gerarNomeCompleto();  // Gerar nome completo com 2 a 4 sobrenomes
  const cpf = faker.br.cpf();  // Gerar CPF válido
  const email = gerarEmail();  // Gerar email com domínio fixo 'cashmeQA'
  const celular = gerarCelular();  // Gerar número de celular com DDD válido
  const dataNascimento = gerarDataNascimento();  // Gerar data de nascimento com idade entre 18 e 70 anos

  // Formatar a data de nascimento como 'DD/MM/YYYY'
  const dia = String(dataNascimento.getDate()).padStart(2, '0'); // Garante dois dígitos
  const mes = String(dataNascimento.getMonth() + 1).padStart(2, '0'); // Garante dois dígitos
  const ano = dataNascimento.getFullYear();

  const dataNascimentoFormatada = `${dia}/${mes}/${ano}`;

  // Retornar os dados como um objeto
  return {
    nomeCompleto,
    cpf,
    email,
    celular,
    dataNascimento: dataNascimentoFormatada, // Data no formato 'DD/MM/YYYY'
  };
}
// Função para gerar o nome completo com 2 a 4 sobrenomes
function gerarNomeCompleto() {
  const primeiroNome = faker.name.firstName(); // Primeiro nome
  const sobrenomes = [];
  const numeroSobrenomes = faker.random.number({ min: 2, max: 4 }); // Número de sobrenomes entre 2 e 4

  // Adicionar de 2 a 4 sobrenomes
  for (let i = 0; i < numeroSobrenomes; i++) {
    sobrenomes.push(faker.name.lastName());
  }

  // Combinar o primeiro nome com os sobrenomes
  return primeiroNome + " " + sobrenomes.join(" ");
}

// Função para gerar um celular com DDD válido e número começando com 9
function gerarCelular() {
  const ddd = faker.random.number({ min: 11, max: 99 }); // DDD válido
  const numero = '9' + faker.random.number({ min: 10000000, max: 99999999 }); // Número de celular válido
  return `(${ddd}) ${numero.slice(0, 5)}-${numero.slice(5)}`;
}

// Função para gerar uma data de nascimento com idade entre 18 e 70 anos
function gerarDataNascimento() {
  const anoAtual = new Date().getFullYear();
  const anoNascimentoMin = anoAtual - 70;
  const anoNascimentoMax = anoAtual - 18;
  const anoNascimento = faker.random.number({ min: anoNascimentoMin, max: anoNascimentoMax });
  const mesNascimento = faker.random.number({ min: 0, max: 11 });
  const diaNascimento = faker.random.number({ min: 1, max: 28 });
  return new Date(anoNascimento, mesNascimento, diaNascimento);
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

// Exporta a função para uso em outros arquivos
module.exports = { gerarDadosPessoais };
