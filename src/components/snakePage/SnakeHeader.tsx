import { MutableRefObject } from "react";

type Props = {
    scoreRef: MutableRefObject<HTMLSpanElement | null>;
    score: number;
    bestScore: string | null;
};

const SnakeHeader = ({ scoreRef, score, bestScore }: Props) => {
    return (
        <div className="snake__header">
            <h1>Cloned Snake</h1>
            <div className="score-row">
                <h2>
                    Score :{" "}
                    <span ref={scoreRef} className="score">
                        {score}
                    </span>
                </h2>
                <h2>
                    Meilleur score :<span>{bestScore ? bestScore : "0"}</span>
                </h2>
            </div>
        </div>
    );
};

export default SnakeHeader;
