import { Link } from "react-router-dom";

type Props = {
    gameName: string;
    importedImg: string;
};

const GameCard = ({ gameName, importedImg }: Props) => {
    return (
        <div className="game">
            <div className="game__img-container">
                <img src={importedImg} alt={"screenshots of " + gameName} />
            </div>
            <h3>{gameName}</h3>
            <Link to={"/" + gameName}>Play</Link>
        </div>
    );
};

export default GameCard;
