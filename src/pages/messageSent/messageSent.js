import React, { useEffect } from "react";
import "./messageSent.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function MessageSent () {

    useEffect(() => {
        window.scrollTo ({top: 0});
    });

    return (
        <>
            <Header />

            <div id="messageContainer">
                <span id="sentMessage">Mensagem Enviada!</span>
            </div>        

            <Footer />
        
        </>

    )
}

export default MessageSent