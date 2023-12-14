import React, { useContext } from "react";
import "./imageSection.css";
import { GeneralContext } from "../../../contexts/generalContexts";
import ViewMoreButton from "../../button/viewMore";

const images = [
    {path: require("../../../assets/gameImages/(1).jpg"), description: "Imagem 1"},
    {path: require("../../../assets/gameImages/(2).jpg"), description: "Imagem 2"},
    {path: require("../../../assets/gameImages/(3).jpg"), description: "Imagem 3"},
    {path: require("../../../assets/gameImages/(4).jpg"), description: "Imagem 4"},
    {path: require("../../../assets/gameImages/(5).jpg"), description: "Imagem 5"},
    {path: require("../../../assets/gameImages/(6).jpg"), description: "Imagem 6"},
    {path: require("../../../assets/gameImages/(7).jpg"), description: "Imagem 7"},
    {path: require("../../../assets/gameImages/(8).jpg"), description: "Imagem 8"},
    {path: require("../../../assets/gameImages/(9).jpg"), description: "Imagem 9"},
    {path: require("../../../assets/gameImages/(10).jpg"), description: "Imagem 10"},
    {path: require("../../../assets/gameImages/(11).jpg"), description: "Imagem 11"},
    {path: require("../../../assets/gameImages/(12).jpg"), description: "Imagem 12"},
    {path: require("../../../assets/gameImages/(13).jpg"), description: "Imagem 13"},
    {path: require("../../../assets/gameImages/(14).jpg"), description: "Imagem 14"},
    {path: require("../../../assets/gameImages/(15).jpg"), description: "Imagem 15"},
    {path: require("../../../assets/gameImages/(16).jpg"), description: "Imagem 16"},
    {path: require("../../../assets/gameImages/(17).jpg"), description: "Imagem 17"},
    {path: require("../../../assets/gameImages/(18).jpg"), description: "Imagem 18"},
    {path: require("../../../assets/gameImages/(19).jpg"), description: "Imagem 19"},
    {path: require("../../../assets/gameImages/(20).jpg"), description: "Imagem 20"},

]

function ImageSection () {

    const {isModalOpen, setIsModalOpen, selectedImage, setSelectedImage, showImages} = useContext (GeneralContext)

    const openModal = (imagePath) => {
        setIsModalOpen (true);
        setSelectedImage (imagePath);
    }

    const closeModal = () => {
        setIsModalOpen (false);
        setSelectedImage (null);
    }

    return (
        <div id="imageContainer">

            <div id="titleContainer">
                <p id="imageTitle">Imagens</p>
                <div id="line"></div>
            </div>

            <div id="picturesContent">
                {images.map((image, index) => (
                    <img 
                        key={index}
                        className="pictures"
                        src={image.path}
                        alt={image.description}
                        style={{ display: showImages || index <= 3 ? "block" : "none" }}
                        onClick={ () => openModal(image.path)}
                    />
                ))}
            </div>
        
            <ViewMoreButton />

            {isModalOpen ? (
                <div id="modal" onClick={ closeModal }>

                    <img id="modalImage" src={ selectedImage } alt="Imagem ampliada" />
                    
                </div>) : ''
            }
        </div>
    )
}

export default ImageSection