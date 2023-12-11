import React, { useEffect } from "react";
import Header from "../../components/header/header";
import CharactersSection from "../../components/charactersSection/charactersSection";
import Footer from "../../components/footer/footer";

function Characters () {

    useEffect(() => {
        window.scrollTo ({top: 0});
    });

    return (
        <div>

            <Header />

            <CharactersSection />
            
            <Footer />
           

        </div>
    )
}

export default Characters