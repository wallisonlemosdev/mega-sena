var state = {board : [], currentGame: [], savedGames: []};

function start() {
    addNumberToGame(1);
    addNumberToGame(2);
    addNumberToGame(3);
    addNumberToGame(4);
    addNumberToGame(1);
    addNumberToGame(5);
    addNumberToGame(6);
    addNumberToGame(61);
    addNumberToGame(59);
    addNumberToGame(45);
    removeNumberFromGame(4);
    saveGame();
    addNumberToGame(21);
    removeNumberFromGame(61);
    removeNumberFromGame(0);
    saveGame();
    
    console.log(state.currentGame);
    console.log(state.savedGames);
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
    
    if(isNumberInGame(numberToAdd)) {
        console.error('Esse número já está no seu jogo!');
        return;
    }
    
    state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove) {
    
    if(numberToRemove < 1 || numberToRemove > 60) {
        console.error('Número inválido! O número deve ser de 1 a 60');
        return;
    }
    
    var newGame = [];
    
    for(var i = 0; i < state.currentGame.length; i++) {
        var currentNumber = state.currentGame[i];
        
        if(currentNumber === numberToRemove) {
            continue;
        }
        
        newGame.push(currentNumber);
    }
    
    state.currentGame = newGame;
}

function isNumberInGame(numberToCheck) {
    return state.currentGame.includes(numberToCheck);
}

function saveGame() {
    if(!isGameComplete()) {
        console.error('O jogo não está completo');
        return;
    }
    
    state.savedGames.push(state.currentGame);
}

function isGameComplete() {
    return state.currentGame.length === 6;
}

start();