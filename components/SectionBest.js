import React from 'react'
import styled from 'styled-components'
import Steps from '../images/steps.png'
import Phone from '../images/phone.png'
import Car from '../images/car.png'


const Section__Best = styled.section`
    height: 792px;
    max-width: 100%;
    background: #E6F0F4;
    top: 2273px;
    @media (max-width: 475px) {
        height: 1560px;
    }
    
    .section__best {
        text-align: center;
        > 
        h2 {
           position: absolute;
           top: 2346px;
           left: 195px;
           height: 120px;
           width: 1024px;
           font-style: normal;
           font-size: 40px;
           line-height: 49px;
           color: #494949;
           @media (max-width: 475px) {
               width: 338.57px;
               height: 64.2px;
               line-height: 36px;
               font-size: 28px;
               left: 21.84px;
               top: 1840.14px;
               text-align: left;
           }
        }
        >
        p {
        position: absolute;
        width: 951px;
        left: 231px;
        top: 2397px;
        font-style: normal;
        font-weight: 800;
        height: 23px;
        color: #05668D;
        text-transform: uppercase;
        padding-top: 2em;
        @media (max-width: 475px) {
            width: 333.26px;
            height: 81px;
            left: 21.84px;
            top: 1912px;
            font-size: 13px;
            font-weight: 600;
            line-height: 22px;
            text-align: left;
        }
        }   
    }
    .section__container-position {
            display: flex;
            transform: translate(130px, 206px);
            @media (max-width: 475px) {
            transform: translate(0,0);
            left: 22.16px;
            top: 2002px;
            position: absolute;
            flex-direction: column;
            }
        }

    .section__container-best {
        max-width: 377.63px;
        margin-right: 15px;
        >
        img {
        max-width: 377.63px;
        height: 215px;
        border-radius: 12px;
        @media (max-width: 475px) {
            width: 332.54px;
            height: 178.39px;
            border-radius: 6px;
        }
        }
        > 
        .title {
            color: #353535;
            font-weight: 500;
            line-height: 24px;
            @media (max-width: 475px) {
                line-heiht: 20px;
                font-size: 12px;

            }
        }
        >
        .paragraph {
            font-size: 18px;
            line-height: 24px;
            height: 80px;
            color: #353535;
            font-weight: 800;
            @media (max-width: 475px) {
                line-height: 20px;
                font-size: 16px;
                height: 66.38px;
                width: 332.54px;
            }
        }
        >
        .paragraph__second {
            color: #494949;
            line-height: 24px;
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
            @media (max-width: 475px) {
                font-size: 13px;
                line-height: 18px;
                height: 68.87px;
                width: 332.2px;
                height: 69px;
                transform: translateY(-20px);
            }
        }
        > 
        button {
            border-radius: 6px;
            width: 137px;
            height: 48px;
            color: #FFFFFF;
            font-weight: 800;
            border: none;
            @media (max-width: 475px) {
                margin-bottom: 24px;
            }
        }
        .info {
            background: #494949;
        }
        .sale {
            background: #05668D;
        }
        .formsimplify {
            color: #05668D !important;
        }
        .advice {
            color: #00C39A !important;
        }
        .purchase {
            background: #00C39A;
        }
        >
        .section__phone {
            display: inline-block;
            width: 373px;
            height: 215px;
            background: #FFFFFF;
            border-radius: 12px;
            @media (max-width: 475px) {
                width: 328.46px;
                height: 178.39px;
                overflow: hidden;
            }
           > img {
               margin-top: 8px;
               margin-left: 82px;
               @media (max-width: 475px) {
                   height: 272.14px;
                   width: 178.31px;
                   margin-left: 72px;
               }
           }
        }
    }
`;

const SectionBest = () => {
    return(
       <Section__Best>
       <div className="section__best">
        <h2>Pourquoi choisir <span className="best">meilleure-reprise.com</span>?</h2>
        <p>acheter, vendre ou faire reprendre une voiture d'occasion n'a jamais été si simple !</p>
        </div>
        <div className="section__container-position">
        <div className="section__container-best">
        <img alt="Démarches et Informations" src={Steps}/>
        <p className="title">demarches et informations</p>
        <p className="paragraph">Les conseils d'un professionnel auto pour acheter ou vendre une voiture d'occasion</p>
        <p className="paragraph__second">Suspendisse at egestas elit. Nunc odio ipsum,<br/>
        lobortis id congue id, lacinia vitae turpis. Nam et iaculis augue, Suspendisse tristique ultrices accumsan.</p>
        <button className="info">M'informer</button>
        </div>
        <div className="section__container-best">
        <span className="section__phone">
        <img alt="Téléphone" src={Phone}/>
        </span>
        <p className="title">Vendre rapidement</p>
        <p className="paragraph formsimplify">Formulaire simplifié pour la vente ou la reprise de votre d'occasion</p>
        <p className="paragraph__second">Suspendisse at egestas elit. Nunc odio ipsum,<br/>
        lobortis id congue id, lacinia vitae turpis. Nam et iaculis augue, Suspendisse tristique ultrices accumsan.</p>
        <button className="sale">Vendre</button>
        </div>
        <div className="section__container-best">
        <img alt="Voiture" src={Car}/>
        <p className="title">Acheter en toute securite</p>
        <p className="paragraph advice">Les conseils d'un professionnel auto pour acheter ou vendre une voiture d'occasion</p>
        <p className="paragraph__second">Suspendisse at egestas elit. Nunc odio ipsum,<br/>
        lobortis id congue id, lacinia vitae turpis. Nam et iaculis augue, Suspendisse tristique ultrices accumsan.</p>
        <button className="purchase">Acheter</button>
        </div>
        </div>
       </Section__Best>
    )
}

export default SectionBest;
