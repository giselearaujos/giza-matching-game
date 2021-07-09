import CardGame from "../../components/CardGame"

function BoardGamer(amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

    console.log($htmlBoardGame);

    return $htmlBoardGame
}

export default BoardGamer;