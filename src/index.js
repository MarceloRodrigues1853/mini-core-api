// Importação da função de validação
const { registerUser } = require("./service");
const { listUsers } = require("./repository");

// Testes de validação
const user1 = { name: "Marcelo", age: 25, email: "marcelo@email.com" };
const user1Duplicate = { name: "Marcelo Clone", age: 28, email: "marcelo@email.com" };
const user2 = { name: "Ana", age: 16, email: "ana@email.com" };
const user3 = { name: "Carlos", age: 30, email: "carlos@email.com" };

// Testes de cadastro
console.log("1. Cadastrando Marcelo:", registerUser(user1));
console.log("2. Tentando duplicar e-mail:", registerUser(user1Duplicate));
console.log("3. Tentando cadastrar menor de idade:", registerUser(user2));
console.log("4. Cadastrando Carlos:", registerUser(user3));

// Lista de todos os usuários no banco
console.log("\n--- Usuários salvos no banco ---");
console.log(listUsers());