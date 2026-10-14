// Importação das funções do service
const {
    registerUser,
    getUsersByMinAge,
    getPublicUsers,
  } = require("./service");
  
  // Cadastrando 3 usuários válidos no banco
  registerUser({ name: "Marcelo", age: 25, email: "marcelo@email.com" });
  registerUser({ name: "Carlos", age: 30, email: "carlos@email.com" });
  registerUser({ name: "Beatriz", age: 19, email: "beatriz@email.com" });
  
  // Exibe o relatório público (DTO sem age e sem createdAt)
  console.log("--- 1. Relatório Público (DTO sem age e sem createdAt) ---");
  console.log(getPublicUsers());
  
  // Exibe os usuários com 25 anos ou mais
  console.log("\n--- 2. Usuários com 25 anos ou mais ---");
  console.log(getUsersByMinAge(25));