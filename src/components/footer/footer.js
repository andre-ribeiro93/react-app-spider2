import React from "react";
import "./footer.css";
import LogoInsomniac from "../../assets/logos/logo-insomniac-branca.png";
import LogoMarvel from "../../assets/logos/logo-marvel.png"
import LogoPSStudio from "../../assets/logos/logo-PSstudio.webp"


function Footer () {

    return (

<>
    <div id="emptyBar"></div>
    <div id="producersContainer">
        <div id="marvelContainer">
            <img id="logoMarvel" src={LogoMarvel} alt="logo Marvel" />
            <span id="oficialMarvel">© 2023 MARVEL</span>
        </div>
        <img id="logoInsomniac" src={LogoInsomniac} alt="logo Insomniac" />
        <img id="logoPSStudio" src={LogoPSStudio} alt="logo PSS Publisher" />
    </div>
        <div id="developerContainer">
            <span id="developer">Desenvolvido por © André Ribeiro</span>
        </div>
</>
    )
}

export default Footer