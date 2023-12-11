import React from "react";
import "./salesSection.css";
import LogoPS5 from "../../../assets/logos/logo-PS5-branca.png";
import { Element } from "react-scroll";

function SalesSection () {

    return (

        <Element id="salesContainer">

                <a className="salesContent" href="https://www.playstation.com/en-us/games/marvels-spider-man-2/" target="_blank" rel="noreferrer">
                    <div id="gameCard1"></div>
                    <div className="gameText">
                        <p className="callToAction">COMPRAR</p>
                        <p className="gameDescription">MARVEL'S SPIDER-MAN 2</p>
                        <img className="ps5Logo" src={LogoPS5} alt="logo PS5"/>
                    </div>
                </a>

                <a className="salesContent" href="https://www.playstation.com/en-us/games/marvels-spider-man-2/" target="_blank" rel="noreferrer">
                    <div id="gameCard2"></div>
                    <div className="gameText">
                        <p className="callToAction">COMPRAR</p>
                        <p className="gameDescription">MARVEL'S SPIDER-MAN 2<br />DIGITAL DELUXE EDITION</p>
                        <img className="ps5Logo" src={LogoPS5} alt="logo PS5"/>
                    </div>
                </a>

            </Element>
    )
}

export default SalesSection