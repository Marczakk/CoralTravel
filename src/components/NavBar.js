import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import {Button} from './Button'


function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };


    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
         <nav class="navbar">
            <div class="navbar-container">
                <Link to="/" class="navbar-logo" onClick={closeMobileMenu} >
                    Coral Travel <i class="fas fa-plane-departure"></i>
                </Link>
                <div class="menu-icon" onClick={handleClick}>
                    <i class={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul class={click ? 'nav-menu active' : 'nav-menu'}>
                    <li class="nav-item">
                        <Link to="/" class='nav-links' onClick={closeMobileMenu}>
                            Strona Główna
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/services" class='nav-links' onClick={closeMobileMenu}>
                            Oferty
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/products" class='nav-links' onClick={closeMobileMenu}>
                            Kontakt
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/sign-up"
                         class='nav-links-mobile'
                          onClick={closeMobileMenu}>
                            Zapisz się 
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Last Minute <i class="far fa-clock"></i></Button>}
            </div>
         </nav>
        </>
    );
}

export default NavBar
