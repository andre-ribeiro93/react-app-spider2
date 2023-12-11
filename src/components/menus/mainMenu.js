import React, { useContext } from "react";
import "./mainMenu.css"
import { Link } from "react-router-dom";
import { GeneralContext } from "../../contexts/generalContexts";

function MainMenu () {

    const { isMenuOpen, setIsMenuOpen } = useContext (GeneralContext)

    const closeMenu = () => {
        setIsMenuOpen(false);
    }


    return (

        <div id="menuContainer">

            {isMenuOpen ?
                <nav>
                    <ul id="mainUl">
                        <Link to='/' onClick={closeMenu}>
                            <li className="mainLi">Home</li>
                        </Link>

                        <Link to='/characters' onClick={closeMenu}>
                            <li className="mainLi">Characters</li>
                        </Link>

                        <Link to='/contato' onClick={closeMenu}>
                            <li className="mainLi">Contato</li>
                        </Link>
                    </ul>
                </nav>
                : ''
            }
            
        </div>
        
    )
}

export default MainMenu
