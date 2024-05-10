import React from 'react';
import '../styles/pages/_about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDog, faBowlFood, faHeart, faSnowflake } from "@fortawesome/free-solid-svg-icons";
// import Contact from '../components/Contact.jsx';

const About = () => {

  return (
<>
<div className='about'>
  <h3 className="about__title">What's in the tub</h3>
  <div className="about__ingredients">
    <p className="about__text">
      Indulge your furry friends with our exceptional ice cream, carefully crafted to prioritize their health and happiness. Our recipe revolves around fat-free yogurt, ensuring that each delightful scoop is as nutritious as can be, boasting a mere 59 calories per tub! We understand that dogs cannot digest lactose, which is why our formula is meticulously lactose-free, guaranteeing only happy tummies here! <FontAwesomeIcon icon={faDog}/>
      <br></br>
      <br></br>
      Prepare to treat your beloved companions to a tantalizing selection of flavours. Currently, we offer banana flavour, peanut butter flavour (both made with real bananas and peanuts) and now a new vanilla flavour! Rest assured, our ice cream is exclusively concocted from 100% natural ingredients, completely free from added preservatives, non-natural sugars, or any nasties. We take pride in offering a guilt-free indulgence that radiates pure goodness. <FontAwesomeIcon icon={faHeart}/>
      <br></br>
      <br></br>
      For optimal taste and texture, we recommend storing the ice cream in its frozen state at a chilly -18°C and consume within 5 months of purchase for optimal taste. Once defrosted, please consume within 3 days and do not refreeze. <FontAwesomeIcon icon={faSnowflake}/>
      <br></br>
      <br></br>
      Please note that while the ice cream baseline is fat-free, peanut butter and bananas contain naturally occurring fats and sugars.  <FontAwesomeIcon icon={faBowlFood}/>
    </p>
  </div>

  <div className="about__ingredients">
    <table className="table-ingredients">
      <th colspan="4"><h5 className='table__title table__title-ingredients'>Ingredients</h5></th>
      <tr>
        <td><h5 className='table__subtitle'>Banana Flavour</h5></td>
        <td><h5 className='table__subtitle'>Peanut Butter Flavour</h5></td>
        <td><h5 className='table__subtitle'>Vanilla Flavour</h5></td>
      </tr>
      <tr>
        <td className='table__values'>Fat-Free Yoghurt (Milk)</td>
        <td className='table__values'>Fat-Free Yoghurt (Milk)</td>
        <td className='table__values'>Fat-Free Yoghurt (Milk)</td>
      </tr>
      <tr>
        <td className='table__values'>Fresh Bananas</td>
        <td className='table__values'>100% Peanut butter (Peanuts)</td>
        <td className='table__values'>Vanilla Essence</td>
      </tr>
      <tr>
        <td className='table__values'>Live Cultures</td>
        <td className='table__values'>Live Cultures</td>
        <td className='table__values'>Live Cultures</td>
      </tr>
      <tr>
        <td className='table__values'>Lactase Enzyme</td>
        <td className='table__values'>Lactase Enzyme</td>
        <td className='table__values'>Lactase Enzyme</td>
      </tr>
    </table>
  </div>
  {/* /* MAKE RESPONSIVE, use row or not? */}

  <br></br>

  <table className="table-nutrition">
    <th colspan="4"><h5 className='table__title table__title-nutrition'>Nutritional value per tub:</h5></th>
      <tr>
        <td><h5 className='table__subtitle'>Nutrition</h5></td>
        <td><h5 className='table__subtitle'>Banana Flavour</h5></td>
        <td><h5 className='table__subtitle'>Peanut Butter Flavour</h5></td>
        <td><h5 className='table__subtitle'>Vanilla Flavour</h5></td>
      </tr>
      <tr>
        <td className='table__values'>Energy</td>
        <td className='table__values'>79kcal</td>
        <td className='table__values'>85kcal</td>
        <td className='table__values'>59kcal</td>
      </tr>
      <tr>
        <td className='table__values'>Fat</td>
        <td className='table__values'>0g</td>
        <td className='table__values'>*1.9g</td>
        <td className='table__values'>0g</td>
      </tr>
      <tr>
        <td className='table__values'>Carbohydrates</td>
        <td className='table__values'>14.4g</td>
        <td className='table__values'>10.8g</td>
        <td className='table__values'>9.4g</td>
      </tr>
        <td className='table__values'>of which sugars</td>
        <td className='table__values'>*7.6g</td>
        <td className='table__values'>*5.9g</td>
        <td className='table__values'>3.3g</td>
      <tr>
        <td className='table__values'>Protein</td>
        <td className='table__values'>6.8g</td>
        <td className='table__values'>10.7g</td>
        <td className='table__values'>6.6g</td>
      </tr>
      <tr>
        <td className='table__values'>Fibre</td>
        <td className='table__values'>1.2g</td>
        <td className='table__values'>2g</td>
        <td className='table__values'>0.6g</td>
      </tr>
      <tr>
        <td className='table__values'>Salt</td>
        <td className='table__values'>0.18g</td>
        <td className='table__values'>0.18g</td>
        <td className='table__values'>0.18g</td>
      </tr>
      <tr>
        <td className='table__values'>Calcium</td>
        <td className='table__values'>0.16g</td>
        <td className='table__values'>0.16g</td>
        <td className='table__values'>0.16g</td>
      </tr>
    </table>
    <p className='fats'>*Peanuts and bananas contain naturally occurring sugars and/or fats.</p>
    </div>
    {/* <Contact /> */}
    </>
  );
};

export default About;
