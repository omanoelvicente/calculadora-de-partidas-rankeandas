function main() {
    let winningBalance = calculateWins(200,1);
    let message = levelPlayer(winningBalance);
    showMessage(winningBalance, message);
}

function calculateWins(numberOfWins, numberOfDefeats) {
     return numberOfWins - numberOfDefeats;

}

function levelPlayer(winningBalance)
{
    
    if (winningBalance <= 10) {
        message = "Ferro";
    } else if ((winningBalance > 11) && (winningBalance <= 20)) {
        message = "Bronze";
    } else if ((winningBalance > 21) && (winningBalance <= 50)) {
        message = "Prata";
    } else if ((winningBalance > 51) && (winningBalance <= 80)) {
        message = "Ouro"
    } else if ((winningBalance> 81) && (winningBalance <= 90)) {
        message = "Diamante";
    } else if ((winningBalance > 91) && (winningBalance <= 100)) {
        message = "Lendario";
    } else {
        message = "Imortal";
    }
    
    return message;
}

function showMessage(winningBalance, message  ) {
    alert(`"O Herói tem saldo de ${winningBalance} está no nível de ${message}`);
}
