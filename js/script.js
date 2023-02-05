var state = {board : [], currentGame: [], savedGames: []};

function start() {
    addNumberToGame(1);
    addNumberToGame(2);
    addNumberToGame(3);
    addNumberToGame(4);
    addNumberToGame(5);
    addNumberToGame(6);
    addNumberToGame(61);
    addNumberToGame(59);
    addNumberToGame(45);
    
    console.log(state.currentGame);
}

function addNumberToGame(numberToAdd) {
    if(numberToAdd < 1 || numberToAdd > 60) {
        console.error('Número inválido! O número deve ser de 1 a 60');
        return;
    }
    
    if(state.currentGame.length >= 6) {
        console.error('O jogo já está completo');
        return;
    }
    
    state.currentGame.push(numberToAdd);
}

start();