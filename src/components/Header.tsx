import { Link } from "react-router-dom";
import HamburgerBtn from "./mui/HamburgerBtn";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <span>Tinyclip</span>
            </Link>
            <HamburgerBtn />
        </header>
    );
};

export default Header;
