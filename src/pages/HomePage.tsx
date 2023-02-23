import SectionGames from "../components/homePage/SectionGames";
import SectionIntro from "../components/homePage/SectionIntro";

const HomePage = () => {
    return (
        <main className="home">
            <SectionIntro />
            <SectionGames />
        </main>
    );
};

export default HomePage;
