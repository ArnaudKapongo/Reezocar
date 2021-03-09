import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import ReezocarDealer from '../images/reezocardealer.png'
import Vector from '../images/Vector.png'


const Section__Dealer = styled.section`
    max-width: 100%;
    height: 660px;
    background-image: url(${ReezocarDealer});
    background-repeat: no-repeat no-repeat;
    background-position: center top;
    position: relative;
    background-size: cover;
    overflow: auto;
    >
    h1 {
        width: 1080px;
        font-size: 54px;
        font-weight: 700;
        line-height: 80px;
        position: absolute;
        left: 131px;
        right: 130px;
        top: 122px;
        height: 140px;
        letter-spacing: -0.03em;
        color: #494949;
        @media (max-width: 475px) {
            height: 187px;
            width: 333px;
            left: 22px;
            top: 44px;
            font-size: 32px;
            line-height: 39px;
        }
    }
    > 
    p {
        width: 1109px;
        height: 39px;
        position: absolute;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #494949;
        left: 130px;
        top: 369px;
        @media (max-width: 475px) {
            width: 306.08px;
            height: 65px;
            left: 22px;
            top: 244px;
            font-size: 14px;
            line-height: 22px;
        }
    }
`;
const Section__Dealer__Form = styled.div`
    display: flex;
    position: absolute;
    left: 130px;
    top: 457px;
    @media (max-width: 475px) {
        top: 362px;
        flex-direction: column;
        left: 22px;
    }
    label {
        color: #494949;
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 16px;
        @media (max-width: 475px) {
            font-size: 14px;
            line-height: 17px;
            left: 0%;
            bottom: 81.08%;
            margin-bottom: 12px;
        }
    }
    .icon-departement {
        position: absolute;
        top: 55px;
        right: 260px;
        width: 24px;
        height: 24px;
        background-image: url(${Vector});
        @media (max-width: 475px) {
            display: none;
        }
    }
    input {
        color: #494949;
        font-weight: 800;
        border: 1px solid #494949;
        box-sizing: border-box;
        border-radius: 6px;
        padding-left: 24px;
        @media (max-width: 475px) {
        width: 333px;
        height: 48px;
        margin-bottom: 20px;
        }
    }
    button {
        border-radius: 6px;
        @media (max-width: 475px) {
            width: 332.04px;
            height: 48px;
            position: absolute;
            top: 170px;
        }
    }
    .departe, .departelabel, button {
        margin-left: 10px;
        @media (max-width: 475px) {
            margin-left: 0px;
        }
    }
     .departe::placeholder {
            color: #C6C6C6;
        }
    .departe:-ms-input-placeholder {
            color: #C6C6C6;
            
        }
    .departe::-ms-input-placeholder {
            color: #C6C6C6;  
    }
    a {
        margin-left:35px;
        margin-top: 12px;
        text-decoration: underline;
        color:#00C39A;
        font-size: 14px;
        @media (max-width: 475px) {
            display: none;
        }
    }

`;

const SectionDealer = () => {
    return(
       <Section__Dealer>
          <h1>Concessionnaire en ligne spécialiste de <span className="purchase">l'achat</span> et la <span className="sale">vente</span> de voitures d'occasion</h1>
          <p>Trouver une petite annonce de annonce de voiture d'occasion près de chez vous ou partout en France :</p>
          <Section__Dealer__Form>
            <div className="section__dealer-form">
                <label className="searchlabel">
                    Quel véhicule recherchez vous ?
                </label>
                <input type="text" value="Peugeot 308 Gti"/>
            </div>
            <div className="section__dealer-form">
                <label className="departelabel">
                    Ville, département
                </label>
                <input type="text" placeholder="Ex: Paris (75)" className="departe"/>
                <span className="icon-departement"></span>
                <span className="verticaline"></span>
                <Link href='/'>Autour de moi</Link>
            </div>
            <div className="section__dealer-form">
                <button>Rechercher</button>
            </div>
          </Section__Dealer__Form>
       </Section__Dealer>
    )
}

export default SectionDealer;
