import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SnakePage from "./pages/SnakePage";
import TetrisPage from "./pages/TetrisPage";
import FlappyBirdPage from "./pages/FlappyBirdPage";
import PongPage from "./pages/PongPage";
import Navigation from "./components/Navigation";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/flappy-bird" element={<FlappyBirdPage />} />
                    <Route path="/pong" element={<PongPage />} />
                    <Route path="/snake" element={<SnakePage />} />
                    <Route path="/tetris" element={<TetrisPage />} />
                </Routes>
                <Navigation />
            </Router>
        </div>
    );
};

export default App;
