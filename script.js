// Elementos do DOM
const virtualCard = document.getElementById('virtual-card');
const balanceAmountElem = document.getElementById('balance-amount');
const depositInput = document.getElementById('deposit-amount');
const depositBtn = document.getElementById('deposit-btn');
const bonusMessageElem = document.getElementById('bonus-message');
const themeButtons = document.querySelectorAll('.theme-btn');

// Estado da aplicação (simulação de dados do usuário)
let currentUser = {
    name: "ANA JULIA",
    balance: 0.00,
    tier: "PREMIUM BLACK"
};

// Função para formatar o saldo para moeda
function formatCurrency(value) {
    return value.toLocaleString('pt-MZ', { style: 'currency', currency: 'MZN' }).replace('MT', 'MZN');
}

// Função para atualizar o display
function updateDisplay() {
    balanceAmountElem.textContent = formatCurrency(currentUser.balance);
}

// Função para lidar com o depósito
depositBtn.addEventListener('click', () => {
    const depositValue = parseFloat(depositInput.value);

    // Validação
    if (isNaN(depositValue) || depositValue <= 0) {
        alert("Por favor, insira um valor de depósito válido.");
        return;
    }

    // No mundo real, aqui você chamaria a API do M-Pesa/e-Mola.
    // Como é uma simulação, vamos apenas adicionar o valor.
    currentUser.balance += depositValue;

    // Lógica do Bônus
    bonusMessageElem.style.display = 'none'; // Esconde a mensagem anterior
    if (depositValue >= 1600) {
        const bonus = 500;
        currentUser.balance += bonus;
        bonusMessageElem.textContent = `Parabéns! Você ganhou um bônus de ${formatCurrency(bonus)}!`;
        bonusMessageElem.style.display = 'block';
    }

    // Limpa o input e atualiza o display
    depositInput.value = '';
    updateDisplay();
    
    // Animação de destaque no saldo
    balanceAmountElem.style.transform = 'scale(1.1)';
    setTimeout(() => {
        balanceAmountElem.style.transform = 'scale(1)';
    }, 300);
});

// Função para trocar os temas
themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe do cartão
        virtualCard.className = 'card';
        // Adiciona a nova classe de tema
        virtualCard.classList.add(button.dataset.theme);

        // Atualiza qual botão está ativo
        document.querySelector('.theme-btn.active').classList.remove('active');
        button.classList.add('active');
    });
});

// Inicializa a aplicação
document.addEventListener('DOMContentLoaded', () => {
    // Carrega dados iniciais na tela (poderia vir de um servidor)
    document.getElementById('card-holder-name').textContent = currentUser.name;
    document.getElementById('card-tier-name').textContent = currentUser.tier;
    updateDisplay();
});
