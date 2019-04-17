const fillSpace = '#', whiteSpace = ' ';
const chessboard = (size) => {
    let chessLine = '';
    let chessLineAlternate = '';
    for (i = 0; i < size; i++) {
        chessLine = chessLine.length === 0 ? chessLine += whiteSpace : (chessLine[chessLine.length - 1] === fillSpace ? chessLine += whiteSpace : chessLine += fillSpace);
        chessLineAlternate = chessLineAlternate.length === 0 ? chessLineAlternate += fillSpace : (chessLineAlternate[chessLineAlternate.length - 1] === fillSpace ? chessLineAlternate += whiteSpace : chessLineAlternate += fillSpace);
    }
    for (i = 0; i < size; i++) {
        let outcome;
        if (i % 2 === 0) {
            outcome = chessLine;
        } else {
            outcome = chessLineAlternate;
        }
        console.log(outcome);
    }
}

chessboard(20);