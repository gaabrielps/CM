
export const Selectors = {
    // Página de Login
    login: {
      cpf: '[data-testid="ds-input-usernameField"]',
      password: '[data-testid="ds-input-passwordField"]',
      submitButton: '[data-testid="authentication-button"]',
      errorMessage: '.error-message'
    },

  
    // Página inicial
    incio: {
      modalAfterLogin: '.styles__Content-sc-197l48d-5 > [data-testid="Link"]', //modal infomrando sobre abas do menu
      buttonNewSimulation: '[id="createSimulationHome"]',
      paginaSimulacao:"[href='/cashmember/simulacoes'] > .styles__MenuItem-sc-1uwzd7g-5 > .styles__MenuLinkTitle-sc-1uwzd7g-6",
      paginaProposta:"[href='/cashmember/propostas'] > .styles__MenuItem-sc-1uwzd7g-5 > .styles__MenuLinkTitle-sc-1uwzd7g-6",
      paginaGerenciamentoEquipe:"[href='https://qa-institucional.cashme.com.br/cashmember/membros'] > .styles__MenuItem-sc-1uwzd7g-5 > .styles__MenuLinkTitle-sc-1uwzd7g-6",
      logoutButton: '#logout-btn'
    },

    // Página do formulário de simulação
    simulationForm: {
      modalidadeProp: {
        proponentePF: '[id="labeloptionNatural-personType"]',
        proponentePJ: '[id="labeloptionLegal-personType"]',
      },
      dadosDoCliente: {
        documento:"[id = 'document']",
        dataNascimento:"[id = 'birthDate']",
        nome:"[id = 'name']",
        email:"[id = 'email']",
        celular:"[id = 'phoneNumber']",
      },
      estado: {
        campo: '[id="propertyStateContent"]',
        nomeDoEstado: (estado) => `//li[.="${estado}"]` //XPATH
      },
      valoresDeCredito: {
        valorImovel: 'input[id="loanAmountCents"]',
        valorCredito: 'input[id="propertyAmountCents"]'
      },
      tipoCorrecao: (correcao) => `//label[@id="labeloption${correcao}Fixed-monetaryCorrection"]`,
      tipoIndexador: (indexador) => `//label[@id="labeloption${indexador}-indexer"]`,
      tipoAmortizacao: (amortizador) => `//label[@id="labeloption${amortizador}-interestTable"]`,
      botaoCalcularSIM: "button[id='submit']",
      botaoTransformarPRO: "button[id='submitProposal']",
    },

    //Página da listagem de simulações
    listaSimulacoes: {
      buscar:"[data-testid='InputWrapper']",
      botaoNovaSimulacao:"",
      verOpcoes:"(//button[@data-testid='Button'])[1]",
      editar:"(//a[.='Editar'])[1]",
      transformarPRO:"",
      visualizarPDF:"",
      mostrarMais10:""

    }
  }

  
  // Opcional: Disponibiliza os seletores globalmente (para evitar imports)
  if (Cypress.env('USE_GLOBAL_SELECTORS')) {
    window.Selectors = Selectors;
  }