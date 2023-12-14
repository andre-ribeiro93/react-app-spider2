import React, { useContext } from "react";
import "./charactersSection.css"
import { GeneralContext } from "../../contexts/generalContexts";

const images = [
    {path: require("../../assets/characters/(1)peter-parker.jpg"), name: "Peter Parker", description: "Peter Parker é o primeiro Spider-Man de Nova York e defende a própria cidade há praticamente uma década. Sobrinho de May Parker, que faleceu durante a epidemia de Bafo do Diabo, ele mantém um relacionamento amoroso com Mary Jane e adota Miles Morales como aprendiz de herói." },
    {path: require("../../assets/characters/(2)miles-morales.png"), name: "Miles Morales", description: "Miles Morales é o aranha mais recente da franquia. Sua origem acontece no primeiro Spider-Man, quando uma aranha radioativa o morde enquanto ajuda os infectados pelo Bafo do Diabo no F.E.S.T.A.. Ele é filho da vereadora Rio Morales, é melhor amigo de Ganke Lee, é sobrinho de Aaron Davis e cultiva uma paixão por Hailey Cooper."},
    {path: require("../../assets/characters/(3)m-j.jpg"), name: "Mary Jane Watson", description:"Mary Jane (ou 'MJ') é jornalista, escritora e esposa de Peter Parker. Ela atua como repórter investigativa do Daily Bugle. Em Spider-Man 2, ela retorna como jornalista e mantém uma relação com Peter."},
    {path: require("../../assets/characters/(4)harry-osborn.jpg"), name: "Harry Osborn", description:"Harry Osborn é um amigo de infância de Peter Parker e Mary Jane Watson. Em Spider-Man estava afastado numa viagem para a Europa, mas, na verdade, estava desacordado numa espécie de encubadora, enquanto Norman Osborn tentava desenvolver uma cura para sua doença terminal. O personagem possui uma participação importante na história do novo game. "},
    {path: require("../../assets/characters/(5)venom.jpg"), name: "Venom", description:"Venom é um dos personagens mais clássicos de vários universos do Spider-Man. Pelo que dá para ver nos trailers (e para poupar você dos spoilers), ele resultado da fusão de um humano com uma criatura alienígena encontrada em solo terrestre."},
    {path: require("../../assets/characters/(6)lizard.jpg"), name: "Lizard", description:"Lizard, o 'Lagarto', é o trágico resultado do trabalho do cientista Curt Connors. Numa tentativa de recuperar seu braço e desenvolver uma solução universal para amputados baseada no DNA de lagartos, Connors acaba se transformando numa fera indomável que, em Spider-Man 2, assume dimensões ainda maiores."},
    {path: require("../../assets/characters/(7)kraven.jpg"), name: "Kraven", description:"Kraven, o caçador, é um conhecido vilão do universo do Spider-Man. Na história original, ele foi batizado como Sergei Kravinoff e nasceu em Stalingrado. Seu principal objetivo é achar caçadas cada vez mais desafiadoras, então, quando descobre que Nova York se tornou um habitat natural para diversas figuras poderosas, resolve visitar a cidade."},
    {path: require("../../assets/characters/(8)sand-man.jpg"), name: "Sandman", description:"Sandman, ou 'Homem Areia', é o alter ego de Flint Marko. Ele já existia no primeiro jogo do Spider-Man, mas apareceu apenas em forma de colecionável. Em Spider-Man 2, ele tem presença mais marcante na história, logo no início do game."},
    {path: require("../../assets/characters/(9)black-cat.jpeg"), name: "Black Cat", description:"Black Cat, ou Felicia Hardy, é a popular anti-heroína e ex-namorada de Peter Parker. Sua primeira aparição aconteceu no primeiro Spider-Man para PS4 e, no novo jogo, ela surge novamente e com uma nova missão."},
    {path: require("../../assets/characters/(10)scream.jpg"), name: "Scream", description:"Scream é um simbionte originado a partir de Venom conhecido da Terra-616 do Spider-Man. Originalmente, ela era um alter-ego de Donna Diego, uma voluntária da Life Foundation. Porém, em Spider-Man 2, sua hospedeira é outra personagem."},
    {path: require("../../assets/characters/(11)wraith.jpg"), name: "Wraith", description:"Wraith é uma anti-heroína também conhecida do universo do Spider-Man. Em Spider-Man 2, ela é o alter ego destrutivo de Yurico 'Yuri' Watanabe, muito presente no primeiro jogo da franquia, o qual atuava como suporte, ajudando Peter a rastrear o crime organizado da cidade de Nova York. Na expansão 'The City That Never Sleeps', após enventos traumáticos Yuri corta o contato com o Homem-Aranha, resurgindo neste novo jogo como a implacável Wraith."},
    {path: require("../../assets/characters/(12)mister-negative.jpg"), name: "Mister Negative", description:"Martin Li, ou Mister Negative, apareceu pela primeira vez em Marvel's Spider-Man como líder da gangue dos Demônios. O vilão foi responsável pelo início da caçada ao Bafo do Diabo, arma biológica desenvolvida pela Oscorp, numa jornada de vingança pessoal contra Norman Osborn."},
    {path: require("../../assets/characters/(13)cletos-kasady.png"), name: "Cletos Kasady", description:"Cletus Kasady é um psicopata bastante popular no universo do Spider-Man. No novo jogo, ele tem uma participação importante no arco de Peter Parker e Yuri Watanabe. Será que esse é um presságio para uma futura aparição do personagem com o seu alter-ego destruidor, o Carnificina?"},
    {path: require("../../assets/characters/(14)ganke-lee.png"), name: "Ganke Lee", description:"Ganke Lee é o melhor amigo de Miles Morales e parceiro na atuação como Spider-Man. Ele conhece a identidade secreta de ambos os aranhas e ajuda a dupla com invenções, hacking e outros truques à distância."},
    {path: require("../../assets/characters/(15)rio-morales.jpg"), name: "Rio Morales", description:"Rio Morales é vereadora de Nova York e mãe de Miles Morales. Ela conhece a identidade secreta da dupla de spiders e colabora com os dois atuando como política. Com a morte de Tia May, Rio se tornou a principal figura materna dos heróis."},
    {path: require("../../assets/characters/(16)hailey-cooper.jpg"), name: "Hailey Cooper", description:"Hailey Cooper é artista de rua, líder de um grupo de artistas e paixão de Miles Morales. A personagem está de volta em Spider-Man 2 e, como é surda, conversa por linguagem de sinais."},
    {path: require("../../assets/characters/(17)norman-osborn.jpg"), name: "Norman Osborn", description:"Norman Osborn é o prefeito de Nova York e dono da Oscorp. Ele é pai de Harry Osborn, antigo colega de Dr. Otto Octavius e conhece Peter Parker há bastante tempo. Assim como no primeiro jogo, suas ações impactam consideravelmente o universo de Marvel's Spider-Man 2."},
    {path: require("../../assets/characters/(18)aaron-davis.jpg"), name: "Aaron Davis", description:"Aaron Davis é tio e conselheiro de Miles Morales. Em 'Mervel's Spider-Man: Miles Morales', Davis era conhecido como Prowler ou Gatuno, um ladrão marcante de Nova York equipado com tecnologia de ponta. Agora, ele retorna arrependido de suas ações como vilão, desempenhando um papel familiar para Miles. "}
]

function CharactersSection () {

    const {isModalOpen, setIsModalOpen, selectedImage, setSelectedImage, showDescription, setshowDescription} = useContext (GeneralContext);

    const openModal = (imagePath, imageDescription) => {
        setIsModalOpen (true);
        setSelectedImage (imagePath);
        setshowDescription (imageDescription);
    };

    const closeModal = () => {
        setIsModalOpen (false);
        setSelectedImage (null);
        setshowDescription ('');
    }

    return (
        <div id="pageContainer">

            <div id="charactersContainer">

                <div id="titleCharactersContainer">
                    <p id="charactersTitle">Conheça alguns dos principais personagens desta nova aventura</p>
                    <div id="line"></div>
                </div>

                <div id="charactersContent">
                    {images.map((image, index) => (
                        <div key={index} className="characterCard">
                            <img
                                key={index}
                                className="charactersImages"
                                src={image.path}
                                alt={image.name}
                                onClick={ () => openModal(image.path, image.description) }
                            />

                            <p className="characterName"> {image.name} </p>
                        </div>
                    ))}
                </div>
                
            </div>


            { isModalOpen ? (
                <div id="modal" onClick={ closeModal }>
                    <img id="characterModalImage" src={selectedImage} alt="Imagem do Personagem"/>
                    <p id="characterDescription">{ showDescription }</p>
                </div>) : ''
            }

        </div>
    )
}

export default CharactersSection