import { createContext, useState } from "react";

export const GeneralContext = createContext();

export const UserStore = ({children}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [selectedImage, setSelectedImage] = useState(null)

    const [showImages, setShowImages] = useState(false)

    const [showDescription, setshowDescription] = useState('')

    const [sent, setSent] = useState (false)

    const [formData, setFormData] = useState ({
        nome: '',
        email: '',
        mensagem: '',
    });
    
    return(
        <GeneralContext.Provider 
        
        value={{
            
            isMenuOpen, setIsMenuOpen,
            isModalOpen, setIsModalOpen,
            selectedImage, setSelectedImage,
            showImages, setShowImages,
            showDescription, setshowDescription,
            sent, setSent,
            formData, setFormData
            
        }}>
            
            {children}
            
        </GeneralContext.Provider>
    )
}