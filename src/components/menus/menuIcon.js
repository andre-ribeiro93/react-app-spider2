import React, { useContext } from "react";
import "./menuIcon.css"
import { GeneralContext } from "../../contexts/generalContexts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const MenuIcon = () => {

    const { isMenuOpen, setIsMenuOpen } = useContext (GeneralContext)

    return (

            <div id="menuIcon" onClick={() => setIsMenuOpen(!isMenuOpen)}>

                <FontAwesomeIcon id="iconBar" icon={faBars} />
                <div id="shadowEffect"></div>

            </div>
    )
}

export default MenuIcon
