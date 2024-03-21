import React from 'react';
import '../styles/pages/_notFound.scss';
import lost from '../photos/lost.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome  } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div>
      <h1 className='not-found__title'>404 - Page not found.</h1>
      <p className='not-found__text'>
        Definitely nothing to do with a dog running riot in the server room. Definitely not that. <br />
        The page you were looking for doesn't exist, why not go back home?
        <button className='button--home' onClick={() => window.location.replace('/')}>Go Home  <FontAwesomeIcon icon={faHome} className="faHome"/></button>
      </p>
      <img className='lost-img' src={lost}></img>
    </div>
  );
};

export default NotFound;
