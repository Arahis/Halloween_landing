import React from 'react'

const Reviews = () => {
    return ( 
        <section className="reviews">
        <div className="wrapper">
            <h2>Отзывы посетителей</h2>
            <div className="review-grid">
                <div className="review-item">
                    <div className="review-content">
                        <img src="/images/bq.png" alt="" />
                        <p className="review-text">Это было, пожалуй, лучшее мероприятие
                        из всех, на которых я была. Отличная музыка и интерьер. Не пожалела, что позвала своих
                        другей. Мы отлично провели время и я обязательно приду на следущие мероприятия. Не
                    сомневайтесь, будет весело.</p>
                    </div>
                    <h5 className="review-author">Анастасия Звягинцева</h5>
                </div>
                <div className="review-item">
                    <div className="review-content">
                        <img src="/images/bq.png" alt="" />
                        <p className="review-text">Долго думал: стоит идти или нет. В последний момент решился и не
                        пожалел. Участвовал в конкурсах, получил множество подарков, бонусов и даже бонусную
                    карту в магазин DNS. В следующем году тоже пойду и приведу своих друзей.</p>
                    </div>
                    <h5 className="review-author">Валерий Атлетов</h5>
                </div>
                <div className="review-item">
                    <div className="review-content">
                        <img src="/images/bq.png" alt="" />
                        <p className="review-text">Самый мистический день в году хочется провести как-то по
                        особенному... Искал мероприятия и наткнулся на этот сайт. Изучив локацию, программу и
                        прочее, решил выбрать именно их. Это лучшее решение! Зовите сюда всех своих друзей и
                    подруг!</p>
                    </div>
                    <h5 className="review-author">Максим Семенов</h5>
                </div>
            </div>
        </div>
    </section>

     );
}
 
export default Reviews;