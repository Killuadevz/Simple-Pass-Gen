// script.js
document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyPassword);
document.getElementById('length').addEventListener('input', updateLength);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+{}:"<>?|[];,./`~';

    let charset = '';
    if (includeUppercase) charset += uppercaseChars;
    if (includeLowercase) charset += lowercaseChars;
    if (includeNumbers) charset += numberChars;
    if (includeSymbols) charset += symbolChars;

    if (charset === '') {
        alert('Selecione pelo menos uma opção de caracteres.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('passwordDisplay').value = password;
}

function copyPassword() {
    const passwordDisplay = document.getElementById('passwordDisplay');
    passwordDisplay.select();
    document.execCommand('copy');
    alert('Senha copiada para a área de transferência!');
}

function updateLength() {
    const length = document.getElementById('length').value;
    document.getElementById('lengthValue').textContent = length;
}
