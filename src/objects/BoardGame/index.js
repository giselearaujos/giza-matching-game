import "./style.css";
import CardGame from "../../components/CardGame"

function BoardGamer(amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);    

    return /*html*/ `
        <section class="board-game">
            ${$htmlContent}
        </section>
    `
}

export default BoardGamer;