// Importação do módulo crypto para gerar um ID aleatório
const crypto = require("crypto");

// Importação da função de validação
const { validateUser } = require("./validator");

// Importação das funções de repositório
const { saveUser, findUserByEmail, listUsers } = require("./repository");

// Função para cadastrar um usuário
function registerUser(user) {
    // Validação do usuário
    const validation = validateUser(user);
    // Se o usuário não for válido, retorna um erro
    if (!validation.valid) {
        return {success: false, error: validation.error };
    }

    // Verifica se o email já está em uso
    const existingUser = findUserByEmail(user.email);
    // Se o email já estiver em uso, retorna um erro
    if (existingUser) {
        return {success: false, error: "Email already in use" };
    }

    // Cria um novo usuário com o ID e a data e hora atual
    const newUser = {
    id: crypto.randomUUID(),
    ...user, // Espelha as propriedades do usuário
    createdAt: new Date().toISOString(),
    };

    // Salva o usuário no repositório
    saveUser(newUser);
    
    // Retorna o usuário cadastrado
    return {success: true, user: newUser };
}

// Função para buscar usuários com idade maior ou igual a minAge
function getUsersByMinAge(minAge) {
    // Lista todos os usuários
    const users = listUsers();
    
    // Filtra os usuários com idade maior ou igual a minAge
    const filteredUsers = users.filter(user => user.age >= minAge);
    
    // Retorna os usuários filtrados
    return filteredUsers;
}

function getPublicUsers() {
    // Lista todos os usuários
    const users = listUsers();

    // Transforma os usuários em um array de objetos com as propriedades id, name e email
    return users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    });
}

// Exportação da função de criação de usuário
module.exports = { registerUser, getUsersByMinAge, getPublicUsers };