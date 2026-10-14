// Importação da função de validação
const { validateUser } = require("./validator");

// Testes de validação
const validTest = { name: "Marcelo", age: 25, email: "marcelo@email.com" };
const invalidAgeTest = { name: "João", age: 16, email: "joao@email.com" };

// Execução dos testes
console.log("Teste 1:", validateUser(validTest));
console.log("Teste 2:", validateUser(invalidAgeTest));