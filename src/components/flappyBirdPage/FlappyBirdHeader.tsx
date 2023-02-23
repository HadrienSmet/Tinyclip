import { MutableRefObject } from "react";

type Props = {
    scoreRef: MutableRefObject<HTMLDivElement | null>;
    currentScore: number;
    bestScore: number;
};

const FlappyBirdHeader = ({ scoreRef, currentScore, bestScore }: Props) => {
    return (
        <section className="flappy-bird__header">
            <h1>Flappy the cloned bird</h1>
            <div className="score-container">
                <div ref={scoreRef} id="score">
                    {currentScore}
                </div>
                <div id="bestscore">{bestScore}</div>
            </div>
        </section>
    );
};

export default FlappyBirdHeader;
