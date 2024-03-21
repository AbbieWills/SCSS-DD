import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/components/_carousel.scss';
import rockyPhoto from '../photos/rocky.png';
import lottie from '../photos/lottie.png';
import sausage from '../photos/sausage.png';
import springer from '../photos/springer.png';
import jackrussel from '../photos/jackrussel.png';
import blacklab from '../photos/blacklab.png';
import blackspringer from '../photos/blackspringer.png';
import lab from '../photos/lab.png';
import whippet from '../photos/whippet.png';


const TestimonialCarousel = () => {
  return (
    <div>
        <h1 className="testimonial__title">What the dogs are saying</h1>
    <Carousel>
      <Carousel.Item interval={3000}>
        <h2 className="photo__text">"This is the best!🍦"</h2>
        <img className="testimonial-img" src={whippet} alt="rockyPhoto" />
        <p className="photo__desc">Melvin, North Yorkshire</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <h2 className="photo__text">"Yummies!"</h2>
        <img className="testimonial-img" src={lab} alt="rockyPhoto" />
        <p className="photo__desc">Baxter, North Yorkshire</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <h2 className="photo__text">"I looooove it ❤️"</h2>
        <img className="testimonial-img" src={rockyPhoto} alt="rockyPhoto" />
        <p className="photo__desc">Rocky, Durham</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <h2 className='photo__text'>"Gorgeous girl Lottie is loving the banana!"</h2>
        <img className="testimonial-img" src={lottie} alt="lottie" />
        <p className="photo__desc">Lottie, Posh Paws - East Yorkshire</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <h2 className='photo__text'>"They both loved it!"</h2>
        <img className="testimonial-img" src={sausage} alt="" />
        <p className="photo__desc">North Yorkshire</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <h2 className='photo__text'>"Soooo yummy!"</h2>
        <img className="testimonial-img" src={springer} alt="" />
        <p className="photo__desc">Paddy, East Yorkshire</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <h2 className='photo__text'>"Happy doggies 😃"</h2>
        <img className="testimonial-img" src={jackrussel} alt="" />
        <p className="photo__desc">Skirlington Market, East Yorkshire</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <h2 className='photo__text'>"Inca approved, the cat liked it too"</h2>
        <img className="testimonial-img" src={blacklab} alt="" />
        <p className="photo__desc">Inca, Harrogate, North Yorkshire</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <h2 className='photo__text'>"Can't get enough!"</h2>
        <img className="testimonial-img" src={blackspringer} alt="" />
        <p className="photo__desc">East Yorkshire</p>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
