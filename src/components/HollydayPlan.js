import React from 'react'

const HollydayPlan = () => {
    return ( 
        <section className="hollyday-plan">
        <div className="wrapper">
            <h2>Что будет на хеллоуине?</h2>
            <div className="hollyday-grid">
                <div className="grid-item item-one">
                    <img src="/images/pumpkin.svg" alt="" />
                    <h4>собранные <br /> тыквы</h4>
                </div>
                <div className="grid-item item-two">
                    <img src="/images/candle.svg" alt="" />
                    <h4>мистическая <br /> атрибутика</h4>
                </div>
                <div className="grid-item item-three">
                    <img src="/images/monster.svg" alt="" />
                    <h4>тематические <br /> костюмы</h4>
                </div>
                <div className="grid-item item-four">
                    <img src="/images/wand.svg" alt="" />
                    <h4>множество <br /> квестов</h4>
                </div>
                <div className="grid-item five">
                    <img src="/images/poison.svg" alt="" />
                    <h4>шведский <br /> стол</h4>
                </div>
                <div className="grid-item six">
                    <img src="/images/ghost.svg" alt="" />
                    <h4>смешные <br /> конкурсы</h4>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default HollydayPlan;