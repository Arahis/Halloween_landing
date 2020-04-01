import React, { useState, useCallback } from 'react'
import ContactForm from './ContactForm';


const ContactSection = ({ title, text, isFirst }) => {
    let className = 'contact'
    isFirst ? (className += ' first') : (className += ' second')

    const [toggle, setToggle] = useState(false)

    const handleOpenForm = useCallback (() => {
        setToggle(true)
    }, [setToggle]) 
    const handleCloseForm = useCallback (() => {
        setToggle(false)
    }, [setToggle]) 


    return (
        <section className={className}>
            <div className="wrapper">
                <div className="box-contact">
                    <div className="contact-text">
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                    <div>
                        <button className="btn" onClick={handleOpenForm}>
                            <i className="material-icons">mail</i>
                            Ваш запрос</button>
                    </div>
                </div>
            </div>
            {toggle && <ContactForm className="orange" onClose={handleCloseForm}/>}
        </section>
    );
}

export default ContactSection;