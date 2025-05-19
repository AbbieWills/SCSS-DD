import React from 'react';
import '../styles/components/_footer.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
library.add(faFacebook, faInstagram)


const Footer = () => {
    return (
<footer className='footer'>
    <div className='container'>
        <a href="https://www.facebook.com/DoggiesDelightsYorkshire/" target='_blank'>
            <FontAwesomeIcon icon="fa-brands fa-facebook" className='icon' />
        </a>
        <a href="https://www.instagram.com/doggiesdelightsyorkshire/" target='_blank'>
            <FontAwesomeIcon icon="fa-brands fa-instagram" className='icon' />
        </a>
        <a href="mailto: doggiesdelightsharrogate@gmail.com" target='_blank'>
            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
        </a>
        <p className='love__text'>
            Made with love &#10084;
        </p>
        <p className='copyright__text'>
            © Doggie's Delights {new Date().getFullYear()} | Website created by Abbie Wills
        </p>
    </div>
</footer> 
    );
}

export default Footer;
