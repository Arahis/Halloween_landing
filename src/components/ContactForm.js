import React, { useEffect, useState, useCallback, useMemo } from 'react';
import firebase from '../firebase/firebase'
import formValidation from './FormValidation'

const ContactForm = ({ className, onClose }) => {
    // Form State
    const [messages, setMessage] = useState(
        {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    )


    // Form Alert state
    const [alertState, setAlertState] = useState(true);

    const [errors, setErrors] = useState({});

    // Setting Firebase
    const db = useMemo(() => firebase.firestore(), []);


    // Handling Esc key press
    const handleKeyDown = useCallback(e => {
        if (e.keyCode === 27) {
            onClose()
        }
    }, [onClose])

    // Handling Input changes
    const handleInputChange = useCallback(e => {
        const { name, value } = e.target;
        setMessage({ ...messages, [name]: value })
    }, [messages])




    // Handling Form Submiting
    const handleFormSubmit = useCallback(e => {
        e.preventDefault();
        formValidation(messages);
        let getErrors = formValidation(messages);

        if (Object.keys(getErrors).length) {
            console.log("пришли в errors", getErrors)
            setErrors({ ...getErrors })
        } else {
            console.log("пришли в бд")
            db.collection('messages').add({
                name: messages.name,
                email: messages.email,
                phone: messages.phone,
                message: messages.message
            }).then(function () {
                console.log("Thank you, message is sent");
            }).catch(function (error) {
                console.error("Error adding document: ", error);
            });

            setMessage({
                name: '',
                email: '',
                phone: '',
                message: ''
            })

            // Show Alert
            setAlertState(false);
            // Hide Alert
            setTimeout(() => { setAlertState(true) }, 3000);
        }

    }, [db, messages])

    // Handling errors on input blur
    const handleInputBlur = useCallback(e => {
        const validationErrors = formValidation(messages);
        let inputName = e.target.name;
        setErrors({ ...errors, [inputName]: validationErrors[inputName] })
    }, [messages, errors])


    // Trigering the Esc keyup function
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    })



    return (
        <section className="contact-form">
            <div className="form-wrapper">
                <div className="form-container">
                    <span className="close-window" onClick={onClose}><i className="material-icons">close</i></span>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="name">Как к вам обращаться <span className="required-field">*</span></label>
                        <input type="text" id="name" name="name" value={messages.name} onChange={handleInputChange} onBlur={handleInputBlur} />
                        {errors.name && <p className="field-error">{errors.name}</p>}
                        <label htmlFor="e-mail">E-mail для связи <span className="required-field">*</span></label>
                        <input type="text" id="email" name="email" value={messages.email} onChange={handleInputChange} onBlur={handleInputBlur} />
                        {errors.email && <p className="field-error">{errors.email}</p>}
                        <label htmlFor="phone">Телефон для связи</label>
                        <input type="text" id="phone" name="phone" value={messages.phone} onChange={handleInputChange} onBlur={handleInputBlur} />
                        {errors.phone && <p className="field-error">{errors.phone}</p>}
                        <label htmlFor="message">Введите Ваш запрос <span className="required-field">*</span></label>
                        <textarea id="message" name="message" cols="30" rows="5" value={messages.message} onChange={handleInputChange} onBlur={handleInputBlur}></textarea>
                        {errors.message && <p className="field-error">{errors.message}</p>}
                        <div className={`alert ${alertState ? 'hidden' : ''} `}><span>Спасибо! Мы скоро с Вами свяжемся.</span></div>
                        <button className={`btn ${className}`}>
                            <i className="material-icons">mail</i>
                           Отправить</button>
                    </form>
                </div>
            </div>
        </section>
    );
}


export default ContactForm;