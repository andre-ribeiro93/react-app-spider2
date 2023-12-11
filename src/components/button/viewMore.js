import React, { useContext } from "react";
import "./viewMore.css";
import { GeneralContext } from "../../contexts/generalContexts";

function ViewMoreButton () {

    const { showImages, setShowImages } = useContext(GeneralContext)

    return (

        <button id="viewMore" onClick={ () => setShowImages(!showImages)} > {!showImages ? 'Mais Imagens' : 'Ocultar Imagens' }</button>

    )
}

export default ViewMoreButton