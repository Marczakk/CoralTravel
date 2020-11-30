import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css'


function HeroSection() {
    return (
        <div class="hero-container">
            <video src="./videos/video-5.mp4" autoPlay loop muted center cover/>
            <h1>Coral Travel </h1>
            <p>Wybierasz się na wakacje? </p>
            <div className="hero-btns">
                <Button class="btns" buttonStyle="btn--outline"
                buttonSize="btn--large">Zamów u nas</Button>
                <Button class="btns" buttonStyle="btn--primary"
                buttonSize="btn--large">Przeceny po chuju
                <i class="far fa-play-circle"/></Button>
            </div>
        </div>
    )
}

export default HeroSection
