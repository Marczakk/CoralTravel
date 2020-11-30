import React from 'react';
import CardItem from './CardItem';
import './Cards.css'


function Cards() {
    return (
        <div class="cards">
            <h1>Zobacz nasze oferty podróży</h1>
            <div class="cards__container">
                <div class="cards__wrapper">
                    <ul class="cards__items">
                        <CardItem 

                        src="./images/img-9.jpg"
                        text="Osada Plouchmanac’h jest usytuowana w sercu wybrzeża Bretanii."
                        label="Adventure"
                        path='/services'
                        />
                        <CardItem 

                        src="./images/img-2.jpg"
                        text="Zatoka Watergate, Newquay w Wielkiej Brytanii"
                        path='/services'
                        />
                    </ul>
                    <ul class="cards__items">
                        <CardItem 

                        src="./images/img-3.jpg"
                        text="Caneiros, Algarve w Portugalii"
                        label="Adventure"
                        path='/services'
                        />
                        <CardItem 

                        src="./images/img-4.jpg"
                        text="Plaża Podrace, Brela w Chorwacji"
                        path='/services'
                        />
                        <CardItem 

                        src="./images/img-5.jpg"
                        text="Calo des Moro na Majorce"
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Cards;
