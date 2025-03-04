// Gera um número aleatório inteiro entre dois valores múltiplos de 50
function gerarValorMultiploDeCinquenta(min, max) {
    const minDividido = Math.ceil(min / 50);
    const maxDividido = Math.floor(max / 50);
    return Math.floor(Math.random() * (maxDividido - minDividido + 1) + minDividido) * 50;
}

// Formata o valor com pontos (ex.: 20.630.50)
function formatarValor(valor) {
    const valorString = (valor / 100).toFixed(2); // Adiciona duas casas decimais
    return valorString.replace('.', '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Remove o ponto decimal original e insere novos pontos
}

// Valor do imóvel (entre 105.000 e 10.000.000)
const propertyValue = gerarValorMultiploDeCinquenta(10500000, 1000000000);

// Crédito (entre 30% e 50% do valor do imóvel, também múltiplo de 50)
const percentualCredito = Math.floor(Math.random() * (50 - 30 + 1) + 30); // Percentual aleatório entre 30% e 50%
const credit = Math.floor((propertyValue * (percentualCredito / 100)) / 50) * 50;

// Exporta os valores formatados
module.exports = {
    propertyValue,
    credit
};
