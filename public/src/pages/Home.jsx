import React from 'react';
import '../styles/pages/_home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIceCream, faPaw, faCircleCheck, faHeart  } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../components/Carousel.jsx';
// import Contact from '../components/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import icecreamtitle from '../photos/icecreamtitle.png';
import cowphoto from '../photos/cowphoto.png';
import tearoom from '../photos/tearooms.png';
import busters from '../photos/busters.png';
import sophies from '../photos/sophies.png';
import farmshop from '../photos/farmshop.png';
import poshpaws from '../photos/poshpaws.png';
import micropig from '../photos/micropig.png';
import bakery from '../photos/bakery.png';
import slingsbys from '../photos/slingsbys.png';
import pjs from '../photos/pjs.png';
import ohmydog from '../photos/ohmydog.png';
import wortley from '../photos/wortley.png';
import warley from '../photos/warley.png';
import rascals from '../photos/rascals.jpeg';
import windmill from '../photos/windmill.png';


const Home = () => {
  return (
    <>
      <div className="row">
        <div className='col-lg-6 col-md-12 col-sm-12 intro'>
          <h1 className='intro__title'>Lactose and Fat-Free <br /> Dog Ice Cream </h1>
          <h2 className='intro__text'>Now available in Peanut Butter, Banana, and Vanilla flavour!
          {/* <a href="/contact" className="button button--shop">
            Enquire <FontAwesomeIcon icon={faIceCream}/>
          </a> */}
          </h2>
        </div>
      <div className='col-lg-6 col-md-12 col-sm-12'>
        <div className='intro-image'>
          <img className='intro-image-img' src={icecreamtitle} alt='ice cream'></img>
        </div>
      </div>
        <div className='explain'>
          <h2 className='explain__title'>Tail Waggingly Tasty</h2>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='explain-info'>
                <p className='explain-info__text'> Doggie's delights is a handmade dog-friendly frozen treat for your furry friend, made with fat-free yoghurt from cows that are free to roam the fields for a whopping 150 days a year. 
                  Our ingredients are tailored to your dog’s dietary needs.<br></br><br></br>
                  We have made our fat-free, lactose-free and gluten-free formula taste tail-waggingly tasty, 
                  the best part is with no artificial flavours or preservatives; your dog can enjoy this tantalisingly tasty treat with no worry whatsoever <FontAwesomeIcon icon={faIceCream} size="3x" className="faicecream"/>
                </p>
        </div>
      </div>
        <div className="col-lg-3">
          <img className='cow-img' src={cowphoto} alt='ice cream'></img>
        </div>
      </div>
    </div>
    <div className='features'>
      <div className="row">
        <div className="features-box col-lg-4">
          <FontAwesomeIcon icon={faCircleCheck} size="3x" className="features-icon features-icon-1"/>
          <h3 className='features-box__title'>Free-from.</h3>
          <p className='features-box__description'>Lactose, fat, gluten and additives.</p>
    </div>

      <div className="features-box col-lg-4">
        <FontAwesomeIcon icon={faPaw} size="3x" className="features-icon features-icon-2"/>
        <h3 className='features-box__title'>Natural.</h3>
        <p className='features-box__description'>Using fresh bananas and 100% peanut butter.</p>
      </div>

      <div className="features-box col-lg-4">
        <FontAwesomeIcon icon={faHeart} size="3x" className="features-icon features-icon-3"/>
        <h3 className='features-box__title'>Low-calorie.</h3>
        <p className='features-box__description'>From only 59 calories per pot!</p>
      </div>
    </div>
  </div>

    <div className='testimonials'>
      <Carousel/>
    </div>

  <div className='press'>
  <h3 className='press__title'>Can be found:</h3>
  <h4 className='press__title__subtitle'>North Yorkshire:</h4>
      <div className="container-fluid">
        <div className='press-item'>
          <a href="https://www.facebook.com/p/PJs-Ices-Waterside-Knaresborough-100063499750810/?locale=en_GB" target='_blank'>
          <img className="press-logo-circle" src={pjs} alt="pjsLogo"></img>
          </a>
          <figcaption className='press-item__text'>PJ's Ices</figcaption>
          <figcaption>Waterside, Knaresborough</figcaption>
        </div>

        <div className='press-item'>
          <a href="https://www.instagram.com/rascalsknaresborough/?hl=en" target='_blank'>
          <img className="press-logo-circle" src={rascals} alt="rascalsLogo"></img>
          </a>
          <figcaption className='press-item__text'>Rascal's</figcaption>
          <figcaption>Waterside, Knaresborough</figcaption>
        </div>

      <div className='press-item'>
        <a href='https://www.facebook.com/slingsbys/' target='_blank'>
            <img className="press-logo" src={slingsbys} alt="SlingsLogo"></img>
        </a>
        <figcaption className='press-item__text'>Slingby's</figcaption>
        <figcaption>49 Tower St, Harrogate</figcaption>
      </div>

      {/* <div className='press-item'>
        <a href='https://www.sophiesbedandbreakfast.co.uk/cornershop' target='_blank'>
            <img className="press-logo" src={sophies} alt="SophiesLogo"></img>
        </a>
        <figcaption className='press-item__text'>Sophie's Corner Shop</figcaption>
        <figcaption>High St, Hampsthwaite, Harrogate</figcaption>
      </div> */}

      <div className='press-item'>
        <a href='https://thewindmillinnlinton.co.uk/' target='_blank'>
            <img className="press-logo" src={windmill} alt="WindmillLogo"></img>
        </a>
        <figcaption className='press-item__text'>The Windmill Inn</figcaption>
        <figcaption>Main St, Linton, Wetherby</figcaption>
      </div>

  <h4 className='press__title__subtitle'>East Yorkshire:</h4>

      <div className='press-item'>
        <a href='https://thatdogshop.co.uk/' target='_blank'>
            <img className="press-logo-circle" src={ohmydog} alt="OhMyDog"></img>
        </a>
        <figcaption className='press-item__text'>Oh My Dog</figcaption>
        <figcaption>2 Dyer Ln, Beverley</figcaption>
      </div>

      <div className='press-item'>
        <a href='https://www.warleycrosskennels.co.uk/' target='_blank'>
            <img className="press-logo" src={warley} alt="WarleyCrossLogo"></img>
        </a>
        <figcaption className='press-item__text'>Warley Cross Kennels & Cattery</figcaption>
        <figcaption>Brandesburton, Beverley</figcaption>
      </div>

      <div className='press-item'>
        <a href='https://www.thefarmshopyorkshire.co.uk/' target='_blank'>
            <img className="press-logo" src={farmshop} alt="FarmshopSkirlaugh"></img>
        </a>
        <figcaption className='press-item__text'>The Farm Shop @ Skirlaugh</figcaption>
        <figcaption>Rose Cottage Farm, Skirlaugh, Hull</figcaption>
      </div>

      <div className='press-item'>
        <a href='https://www.bustersqualityices.co.uk/' target='_blank'>
            <img className="press-logo-circle" src={busters} alt="PawfectlyRaw"></img>
        </a>
        <figcaption className='press-item__text'>Busters Ices</figcaption>
        <figcaption>Van serving around East Yorkshire</figcaption>
      </div>

      <div className='press-item'>
        <a href='https://www.facebook.com/p/Posh-Paws-Hull-100064249983037/' target='_blank'>
            <img className="press-logo" src={poshpaws} alt="PoshPawsLogo"></img>
        </a>
        <figcaption className='press-item__text'>Posh Paws</figcaption>
        <figcaption>22-24 College St, Sutton-on-Hull</figcaption>
      </div>

      {/* <div className='press-item'>
        <a href='https://www.facebook.com/micropiglongriston/' target='_blank'>
            <img className="press-logo" src={micropig} alt="MicropigLogo"></img>
        </a>
        <figcaption className='press-item__text'>MicroPig Bar</figcaption>
        <figcaption>Main Street, Long Riston, Hull</figcaption>
      </div> */}

      <div className='press-item'>
        <a href='https://www.facebook.com/people/The-Old-Post-Office-and-Tearooms/100093574080618/' target='_blank'>
            <img className="press-logo" src={tearoom} alt="TearoomLogo"></img>
        </a>
        <figcaption className='press-item__text'>The Old Post Office Tea Rooms</figcaption>
        <figcaption>2 Cliff Ln, Mappleton</figcaption>
      </div>

      {/* <h4 className='press__title__subtitle'>South Yorkshire:</h4> */}

      {/* <div className='press-item'>
        <a href='https://www.facebook.com/WortleyFarmShop' target='_blank'>
          <img className="press-logo" src={wortley} alt="WortleyFarmShopLogo"></img>
        </a>
        <figcaption className='press-item__text'>Wortley Farm Shop</figcaption>
        <figcaption>Park Ave, Wortley, Sheffield</figcaption>
      </div> */}
    </div>
  </div>
  </div>
    {/* <Contact/> */}
    </>
  )
}

export default Home