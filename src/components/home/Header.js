import React from "react";
import Hero from '../globals/Hero';
import aboutImg from '../../images/aboutBcg.jpeg';
import homeImg from "../../images/homeBcg.jpeg";
import Banner from '../globals/Banner';
import { PrimaryBtn } from '../globals/Buttons';
const Header = () => {
    return (<Hero img={homeImg}>
            <Banner greeting="welcome to"
                title="hotelx resort"
                text="Wil je aan de conditie werken tijdens een groepsles of relaxen in een van de zwembaden? Hier kies je in alle vrijheid waar je zin in hebt. Ook het grote animatieteam biedt voor elk wat wils: spelletjes, sporten, koken, knutselen…"
                >
                <PrimaryBtn t="1rem">view details</PrimaryBtn>
                {/* <PrimaryBtn  as="a" href="https://www.google.be">view details</PrimaryBtn> */}
            </Banner>
            
            </Hero>);
};

export default Header;

