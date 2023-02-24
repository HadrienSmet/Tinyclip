import GameCard from "./GameCard";
import snakeImg from "../../assets/snake-clone.webp";
import pongImg from "../../assets/pong-clone.webp";
import tetrisImg from "../../assets/tetris-clone.webp";
import flappyImg from "../../assets/flappy-bird-clone.webp";
const gamesArray = [
    {
        gameName: "snake",
        importedImg: snakeImg,
    },
    {
        gameName: "pong",
        importedImg: pongImg,
    },
    {
        gameName: "tetris",
        importedImg: tetrisImg,
    },
    {
        gameName: "flappy-bird",
        importedImg: flappyImg,
    },
];

const SectionGames = () => {
    return (
        <section className="games">
            <h2>Cloned Games</h2>
            <div className="games-container">
                {gamesArray.map((game) => (
                    <GameCard
                        key={game.gameName}
                        gameName={game.gameName}
                        importedImg={game.importedImg}
                    />
                ))}
                {/* <GameCard gameName="snake" importedImg={snakeImg} />
                <GameCard gameName="pong" importedImg={pongImg} />
                <GameCard gameName="tetris" importedImg={tetrisImg} />
                <GameCard gameName="flappy-bird" importedImg={flappyImg} /> */}
            </div>
        </section>
    );
};

export default SectionGames;
