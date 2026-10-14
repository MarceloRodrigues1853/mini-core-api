// Importação do módulo crypto para gerar um ID aleatório
const crypto = require("crypto");

// Importação da função de validação
const { validateUser } = require("./validator");

// Importação das funções de repositório
const { saveUser, findUserByEmail } = require("./repository");

// Gera um ID aleatório
const id = crypto.randomUUID(); // Gera algo como "3b12f1df-5232-4804-897e-917bf397618a"

// Gera a data e hora atual
const now = new Date().toISOString; // Gera ex: "2026-10-14T17:58:00.000Z"



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


// Exportação da função de criação de usuário
module.exports = { registerUser };