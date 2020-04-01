import React from 'react';

const HollydayGallery = () => {
    return (
        <section className="party">
            <div className="wrapper">
                <h2>праздники, которые мы организовали</h2>
                <div className="box-party">
                    <div>
                        <div className="img-container">
                            <img src="/images/party-1.png" alt="" />
                        </div>
                        <p>Старый Новый Год</p>
                    </div>
                    <div>
                        <div className="img-container">
                            <img src="/images/party-2.png" alt="" />
                        </div>
                        <p>День Святого Валентина</p>
                    </div>
                    <div>
                        <div className="img-container">
                            <img src="/images/party-3.png" alt="" />
                        </div>
                        <p>День Студентчества</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HollydayGallery;