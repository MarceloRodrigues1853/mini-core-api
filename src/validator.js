// Validação de usuário
function validateUser(user) {
    // Validação de nome
    if (!user.name || user.name.trim() === '') {
        return {
            valid: false,
            error: "Name is required",
        };
    }
    // Validação de idade
    if (!user.age || user.age < 18) {
        return {
            valid: false,
            error: "User must be at least 18 years old",
        };
    }
    // Validação de email
    if (!user.email ||!user.email.includes("@")) {
        return {
            valid: false,
            error: "Invalid email format"
        }
    }
    // Retorno do resultado da validação
    return {
        valid: true,
    };
}

// Exportação da função de validação
module.exports = { validateUser };