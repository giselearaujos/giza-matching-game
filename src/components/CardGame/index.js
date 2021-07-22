import "./style.css";

function CardGame(icon = "giza", alt = "Caricatura Giza") {
    return /*html*/`
        <article class="card-game">
            <img src="images/${icon}.png" alt="${alt}" />
        </article>
    
    `;
}

export default CardGame;