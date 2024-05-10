function calculateRank(wins, losses) {
    let balance = wins - losses;
    let level;

    if (balance <= 10) {
        level = "FERRO";
    } else if (balance >= 11 && balance <= 20) {
        level = "BRONZE";
    } else if (balance >= 21 && balance <= 50) {
        level = "PRATA";
    } else if (balance >= 51 && balance <= 80) {
        level = "OURO";
    } else if (balance >= 81 && balance <= 90) {
        level = "DIAMANTE";
    } else if (balance >= 91 && balance <= 100) {
        level = "LENDÁRIO";
    } else {
        level = "IMORTAL";
    }

    return { balance: balance, level: level };
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const wins = parseInt(document.getElementById('victories').value);
    const losses = parseInt(document.getElementById('loss').value);

    const result = calculateRank(wins, losses);
    const info = document.getElementById('info');
    const valueSpan = document.getElementById('value');

    valueSpan.textContent = `O herói ${name} tem o saldo de ${result.balance} vitórias e está no nível ${result.level}.`;
    info.classList.remove('hidden');
});
