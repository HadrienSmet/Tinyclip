import { MutableRefObject } from "react";

type Props = {
    bestScore: string | null;
    scoreRef: MutableRefObject<HTMLSpanElement | null>;
    score: number;
    handleStartButton: () => void;
    isPlaying: boolean;
};

const TetrisHeader = ({
    bestScore,
    scoreRef,
    score,
    handleStartButton,
    isPlaying,
}: Props) => {
    return (
        <div className="tetris__header">
            <h1>Tetris Clone</h1>
            <div className="tetris__score-container">
                <h3>
                    Best score: <span id="best-score">{bestScore}</span>
                </h3>
                <h3>
                    Score:{" "}
                    <span ref={scoreRef} id="score">
                        {score}
                    </span>
                </h3>
            </div>
            <button onClick={handleStartButton}>
                {isPlaying ? "Pause" : "Start"}
            </button>
        </div>
    );
};

export default TetrisHeader;
