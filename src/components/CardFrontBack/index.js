import CardGame from "../CardGame";

function CardFrontBack() {
    return /*html*/ ` 
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("javascript", "Logo javascript")}
        </article>
    `;
}

export default CardFrontBack;