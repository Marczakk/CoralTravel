import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from "./Button";
import './Footer.css'

function Footer() {
    return (
        <div class="footer-container">
            <section class="footer-subscription">
                <p class="footer-subscription-heading">
                    Dołącz do Newslettera i dowiaduj się natychmiast o przecenach
                </p>
                <p class="footer-subscription-text">
                    Dołącz w każdej chwili
                </p>
                <div class="input-areas">
                    <form>
                        <input

                            type='email'
                            name='email'
                            placeholder='Wpisz Email'
                            class="footer-input"
                        />
                        <Button buttonStyle='btn--outline'>Subskrybuj</Button>
                    </form>
                </div>
            </section>
            <div class="footer-links">
                <div class="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2> O nas</h2>
                        <Link to='/sign-up'>Jak to działa</Link>
                        <Link to='/'>Investorzy</Link>
                        <Link to='/'>Kontakt</Link>
                        <Link to='/'>Oferty</Link>
                        <Link to='/'>Usługi</Link>
                    </div>
                    <div class="footer-link-items">
                        <h2>Przydatne Linki</h2>
                        <Link to='/sign-up'>Blog</Link>
                        <Link to='/'>Zwroty</Link>
                        <Link to='/'>Bilety</Link>
                        <Link to='/'>Certyfikaty</Link>
                        <Link to='/'>Service</Link>
                    </div>
                </div>
                <div class="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>Adress</h2>
                        <Link to='/sign-up'>Westwood Lane</Link>
                        <Link to='/'>Da15 9PS, Sidcup</Link>
                        <Link to='/'>Borzęcin</Link>
                  
                    </div>
                    <div class="footer-link-items">
                        <h2>Kontakt</h2>
                        <Link to='/sign-up'>DLA KLIENTÓW</Link>
                        <Link to='/'>Forum</Link>
                        <Link to='/'>Polska</Link>
                        <Link to='/'>Koronawirus - Informacje</Link>
                        <Link to='/'>Newsletter</Link>
                    </div>
                </div>
            </div>
            <section class="social-media">
                <div class="social-media-wrap">
                    <div class="footer-logo">
                        <Link to='/' class="social-logo">
                            Coral Travel <i class="fab fa-typo3"/>
                        </Link>
                    </div>
                    <small class="website-rights">TRVL 2020</small>
                    <div class="social-icons">
                        <Link 
                        class="social-icon-link facebook"
                        to='/'
                        target="_blank"
                        aria-label="Facebook"
                    >
                        <i class="fab fa-facebook-f" />
                        </Link>
                        <Link 
                        class="social-icon-link instagram"
                        to='/'
                        target="_blank"
                        aria-label="Instagram"
                    >
                        <i class="fab fa-instagram" />
                        </Link>
                        <Link 
                        class="social-icon-link youtube"
                        to='/'
                        target="_blank"
                        aria-label="Youtube"
                    >
                        <i class="fab fa-youtube" />
                        </Link>
                        <Link 
                        class="social-icon-link twitter"
                        to='/'
                        target="_blank"
                        aria-label="Twitter"
                    >
                        <i class="fab fa-twitter" />
                        </Link>
                        <Link 
                        class="social-icon-link linkedin"
                        to='/'
                        target="_blank"
                        aria-label="Linkedin"
                    >
                        <i class="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
