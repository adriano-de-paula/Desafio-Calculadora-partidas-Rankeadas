# Desafio 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Vitórias |	Ranque |
---------|---------|
< 10	| Ferro
11 - 20 |	Bronze
21 - 50 | Prata
51 - 80 | Ouro
81 - 90 | Diamante
91 - 100 | Lendário
≥ 101 | Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

# Como eu fiz
O código em HTML estrutura a página e define os elementos necessários para coletar dados do usuário através do formulário, enquanto o CSS estiliza esses elementos para tornar a interface mais atraente e fácil de usar.

O código JavaScript apresentado é possível determinar o nível de um jogador com base no número de vitórias e derrotas. A função principal, `calculateRank`, recebe dois parâmetros: o número de vitórias (`wins`) e o número de derrotas (`losses`). A partir desses dados, o código calcula o saldo de vitórias subtraindo as derrotas do total de vitórias.

Em seguida, com base no saldo de vitórias (`balence`), o código determina o nível do ranque do jogador. Ele segue uma lógica sequencial de verificação das vitórias para definir o ranque adequado. Se o jogador tiver menos de 10 vitórias, ele será classificado como "Ferro", enquanto mais de 100 vitórias o classificará como "Imortal". Os intervalos intermediários determinam os níveis de ranque como "Bronze", "Prata", "Ouro", "Diamante" e "Lendário", dependendo do número de vitórias.

Quando o formulário é enviado, os dados inseridos são coletados, a função `calculateRank` é chamada e o resultado é exibido na página. O saldo calculado é mostrado, juntamente com o nível de ranque determinado pelo código.
```
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
```
