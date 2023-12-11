import React from "react";
import "./homeMenu.css"
import { Link } from "react-scroll";

function HomeMenu () {

    return (
        <nav id="navHome">
            <ul id="ulHome">

                <Link to="imageContainer" smooth={true} duration={500} offset={-60}>
                    <li className="liHome">IMAGENS</li>
                </Link>

                <Link to="salesContainer" smooth={true} duration={500} offset={-60}>
                    <li className="liHome">COMPRAR</li>
                </Link>

                <Link to="overviewContainer" smooth={true} duration={500} offset={-60}>
                    <li className="liHome">VISÃO GERAL</li>
                </Link>

            </ul>
        </nav>
    )
}

export default HomeMenu