import { Link } from "react-router-dom";
import { MutableRefObject, useEffect, useRef } from "react";

const useNavigation = () => {
    let defBar: Element | null;
    // let header: Element | null;
    let button: Element | null;
    useEffect(() => {
        defBar = document.querySelector("header");
        button = document.querySelector(".menu");
        // header = document.querySelector(".menu");
    }, []);
    const navigationRef = useRef() as MutableRefObject<HTMLDivElement>;

    const classRemover = () => {
        document.body.classList.remove("opened");
        button!.classList.remove("opened");
        defBar!.classList.remove("opened");
        navigationRef.current.classList.remove("opened");
    };

    const attributeButtonToggler = () => {
        if (button) {
            const isExpanded = button.getAttribute("aria-expanded") === "true";
            button.setAttribute(
                "aria-expanded",
                !isExpanded ? "true" : "false"
            );
        }
    };
    const resetButtonBehavior = () => {
        attributeButtonToggler();
        classRemover();
    };

    return {
        resetButtonBehavior,
        navigationRef,
    };
};

const Navigation = () => {
    const { resetButtonBehavior, navigationRef } = useNavigation();

    return (
        <nav ref={navigationRef}>
            <ul>
                <li onClick={resetButtonBehavior}>
                    <Link to="/" onClick={resetButtonBehavior}>
                        Home
                    </Link>
                </li>
                <li onClick={() => resetButtonBehavior()}>Continue</li>
            </ul>
        </nav>
    );
};

export default Navigation;
