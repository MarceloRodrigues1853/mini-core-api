// Importação da função de validação
const { validateUser } = require("./validator");
const { saveUser, findUserByEmail, listUsers } = require("./repository");

// Testes de validação
const user1 = { name: "Marcelo", age: 25, email: "marcelo@email.com" };
const user2 = { name: "Ana", age: 16, email: "ana@email.com" };
const user3 = { name: "Carlos", age: 30, email: "carlos@email.com" };

// Função para cadastrar um usuário
function register(user) {
    // Validação do usuário
    const validation = validateUser(user);
    // Se o usuário não for válido, exibe o erro e retorna
    if (!validation.valid) {
        console.log(`Erro ao cadastrar ${user.name}: ${validation.error}`);
        return;
    }

    // Salva o usuário no repositório
    saveUser(user);
    // Exibe mensagem de sucesso
    console.log(`Usuário ${user.name} cadastrado com sucesso`);
}

// Cadastra os usuários
register(user1);
register(user2);
register(user3);


// Lista de todos os usuários no banco
console.log("\n--- Lista de todos os usuários no banco ---");
console.log(listUsers());

// Busca um usuário pelo email
console.log("\n--- Buscando usuário por e-mail ---");
console.log(findUserByEmail("marcelo@email.com"));