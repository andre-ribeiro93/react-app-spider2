import React from "react";
import './header.css'
import MenuIcon from "../menus/menuIcon";
import MainMenu from "../menus/mainMenu";
import Logo from "../../assets/logos/logo-spider-branca.png";
import LogoGame from "../../assets/logos/logo-marvel-spider-man-2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from "react-router-dom";

function Header () {

    const {pathname} = useLocation ()

    const TopPage = () => {
    
        if (pathname === "/") {
            window.scrollTo ({ top: 0, behavior: 'smooth' });
        }
    }

    return (
        <div id="headerMenu">
            <header>
                <div id="iconContainer">
                    <MenuIcon />
                    <img id="logo" src={Logo} alt="logo de aranha do spider-man"/>
                </div>

                <Link to="/" onClick={TopPage}>
                    <img id="logoGame" src={LogoGame} alt="logo do game marvel's spider-man 2"/>
                </Link>

                <div id="socialMediaContainer">
                    <a href="https://www.linkedin.com/in/andr%C3%A9-ribeiro-a22139237/" target="_blank"  rel="noreferrer">
                        <FontAwesomeIcon className=" socialIcon" icon={faLinkedinIn} />
                    </a>

                    <a href="https://github.com/andre-ribeiro93" target="_blank"  rel="noreferrer">
                        <FontAwesomeIcon className=" socialIcon" icon={faGithub} />
                    </a>
                </div>
            </header>

            <MainMenu />
        </div>
    )
}

export default Header;