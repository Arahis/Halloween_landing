import React from 'react'

const ContactUs = () => {
    return (
        <section className="contact-us">
            <div className="wrapper">
                <h2>Контакты</h2>
                <div className="contact-us-items contact-location">
                    <div className="contact-us-item">
                        <img src="/images/location.svg" alt="location" />
                        <h4 className="item-title">Адрес:</h4>
                        <p className="item-content"><a href="https://goo.gl/maps/4EAnDdWqG4whv7Wo8" target="_blank" rel="noopener noreferrer">Невский проспект 140, <br />офис 140-142</a></p>
                    </div>
                    <div className="contact-us-item contact-phone">
                        <img src="/images/phone.svg" alt="phone" />
                        <h4 className="item-title">Телефон:</h4>
                        <p className="item-content"><a href="tel: 88121112233">8 (812) 111-22-33</a><br />
                        <a href="tel: 88121112233">8 (812) 111-22-33</a></p>
                    </div>
                    <div className="contact-us-item">
                        <img src="/images/clock.svg" alt="working hours" />
                        <h4 className="item-title">Время работы:</h4>
                        <p className="item-content">пн-сб <br />
                            10:00 - 20:00</p>
                    </div>
                    <div className="contact-us-item contact-mail">
                        <img src="/images/mail.svg" alt="e-mail" />
                        <h4 className="item-title">E-mail:</h4>
                        <p className="item-content"><a href="mailto:info@vip.ru">info@vip.ru</a> <br /> 
                        <a href="mailto:support@vip.ru">support@vip.ru</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;