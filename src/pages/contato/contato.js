import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ContactForm from "../../components/contactForm/contactForm";

function Contato () {

    useEffect(() => {
        window.scrollTo ({top: 0});
    });

    return (
        <div>

            <Header />

            <ContactForm />

            <Footer />

        </div>
    )
}

export default Contato