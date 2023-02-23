import GameCard from "./GameCard";
import snakeImg from "../../assets/snake-clone.webp";
import pongImg from "../../assets/pong-clone.webp";
import tetrisImg from "../../assets/tetris-clone.webp";
import flappyImg from "../../assets/flappy-bird-clone.webp";

const SectionGames = () => {
    return (
        <section className="games">
            <h2>Cloned Games</h2>
            <div className="games-container">
                <GameCard gameName="snake" importedImg={snakeImg} />
                <GameCard gameName="pong" importedImg={pongImg} />
                <GameCard gameName="tetris" importedImg={tetrisImg} />
                <GameCard gameName="flappy-bird" importedImg={flappyImg} />
            </div>
        </section>
    );
};

export default SectionGames;
