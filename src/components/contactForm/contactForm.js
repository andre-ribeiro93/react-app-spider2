import React, { useContext } from "react";
import "./contactForm.css";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "../../contexts/generalContexts";

function ContactForm () {

    const {setSent, formData, setFormData} = useContext (GeneralContext);

    const navigate = useNavigate ()

    const handlefilling = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.nome && formData.email && formData.mensagem) {

            setSent (true);
            navigate ('/messageSent')
        } else {
            alert('Por favor, preencha todos os campos antes de enviar');
        }
    };

    return (
        <div id="pageContainer">
            
            <div id="formTitleContainer">
                <p id="tituloForm">Caso necessite de algum suporte entre em contato conosco</p>
                <div id="lineForm"></div>
            </div>
            
            <form id="form" onSubmit={handleSubmit}>

                <label htmlFor="text">Nome</label>
                <input type="text" name="nome" value={formData.nome} onChange={handlefilling} placeholder="Insira seu nome"></input>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handlefilling} placeholder="Insira seu email"></input>

                <textarea name="mensagem" rows="10" value={formData.mensagem} onChange={handlefilling} placeholder="Insira sua mensagem aqui"></textarea>

                <button id="sendButton" type="submit">Enviar</button>

            </form>

        </div>
    )
}

export default ContactForm