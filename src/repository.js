const users = []; // Lista de usuários

// Adiciona um usuário à lista
function saveUser(user) {
    users.push(user);
    return user;
}

// Busca um usuário pelo email
function findUserByEmail(email) {
    return users.find((u) => u.email === email);
}

// Retorna a lista de usuários
function listUsers() {
    return users;
}

// Exportação das funções de repositório
module.exports = { saveUser, findUserByEmail, listUsers };