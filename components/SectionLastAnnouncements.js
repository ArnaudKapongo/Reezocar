import React from 'react'
import styled from 'styled-components'
import Golf from '../images/golf.png'
import Peugeot from '../images/peugeot.png'
import Bmw from '../images/bmw.png'
import Mercedes from '../images/mercedes.png'
import Clio from '../images/clio.png'
import Megane from '../images/megane.png'
import ArrowDown from '../images/arrowdown.png'

const Section__Last__Announcements = styled.section`

    height: 1082px;
    max-width: 100%;
    @media (max-width: 475px) {
        height: 784.14px;
    }
    >
    h2 {
        color: #494949;
        width: 702px;
        height: 80px;
        position: absolute;
        top: 1272px;
        left: 129px;
        line-height: 36px;
        font-size: 40px;
        font-weight: 700;
        @media (max-width: 475px) {
            left: 21px;
            top: 1179px;
            width: 318.96px;
            font-size: 28px;
            line-height: 36px;
        }
    }
    > 
    p {
        position: absolute;
        width: 765px;
        left: 129px;
        top: 1342px;
        height: 155px;
        font-size: 18px;
        line-height: 28px;
        color: #494949;
        font-weight: 300; 
        @media (max-width: 475px) {
            font-size: 14px;
            line-height: 24px;
            left: 21px;
            width: 315.91px;
            height: 155px;
            top: 1270px;
        }
    }
    > 
    select {
        position: absolute;
        top: 1302px;
        left: 1016px;
        box-sizing: border-box;
        border-radius: 6px;
        border: 2px solid #989898;
        width: 285px;
        height: 48px;
        color: #494949;
        font-weight: 600;
        line-height: 20px;
        font-size: 16px;
        text-align: center;
        -moz-appearance:none; 
         -webkit-appearance:none; 
        appearance:none;
        text-align-last: center;
        padding-right: 15px;
        background-image: url(${ArrowDown}) no-repeat;
        @media (max-width: 475px) {
            display: none;
        }
    }
    .section__car-content {
        position: absolute;
        top: 1519px;
        display: flex;
        @media (max-width: 475px) {
            left: 21px;
            top: 1484px;
        }
        .disapear {
            @media(max-width: 475px) {
            display: none;
            }
        }
    }
    .section__car-card {
        max-width: 213px;
        height: 253px;
        border-radius: 6px;
        box-shadow: 0px 20px 40px rgba(5, 102, 141, .1);
        margin-right: 16px;
        img {
            border-top-right-radius: 6px;
            border-top-left-radius: 6px;
        }
        P {
            padding-left: 20px;
            padding-right: 12px;
            font-size: 14px;
            line-height: 20px;
        }
        .title, .price {
        color: black;
        font-weight: 800;
        }   
    }
    
    
`;

const Section__Sort = styled.div`
    >
    .section__sort {
        position: absolute;
        left: 131px;
        top: 1816px;
        @media (max-width: 475px) {
            display: none;
        }
    }
    .section__sort__second {
        position: absolute;
        left: 732px;
        top: 1816px;
        margin-left: 128px;
        @media (max-width: 475px) {
            display: none;
        }
    }
     h2 {
            line-height: 358.4%;
            font-size: 20px;
            font-weight: 800;
            color: #494949;
        }
        button {
            padding: 22px 29px;
            width: 188px;
            height: 48px;
            line-height: 0px;
            font-size: 16px;
            border-radius: 100px;
            margin-right: 8px;
            background: #F9F6F6;
            border: 1px solid #05668D;
            color: #05668D;
        } 
        .button__active {
            background: #05668D;
            border: none;
            color: #FEFEFE;
        }
        .secar {
            display: flex;
            flex-wrap: wrap;
        }
    
`;

const SectionLastAnnouncements = () => {
    return(
        <Section__Last__Announcements>
            <h2>Les dernières annonces <span className="publish">publiées</span></h2>
            <p>Ils nous font confiance, nous avons <span className="inspect">inspecté</span> leur véhicule avant de vous proposer ces
            annonces, acheter une voiture d'occasion à un particulier <span className="security">en toute sécurité</span> contrôle technique OK, carnet
            d'entretient et révisions à jour, Mécanique et carrosserie en bon état </p>
            <select>
                <option value="modele">Les modèles les plus vus</option>
            </select>
            {/* Slider div etc */}
            <div className="section__car-content">
            <div className="section__car-card">
                <img src={Golf} alt="Golf"/>
                <p><span className="title">Volkswagen Golf 6 GTI série limitée</span><br/>
                2008 - Bon état - 92 456 km Issy-les-Moulineaux <br/> <span className="price">23 390€</span></p>
            </div> 
            <div className="section__car-card disapear">
                <img src={Peugeot} alt="Peugeot"/>
                <p><span className="title">Peugeot 208 GTI By Peugeot Sport</span><br/>
                2009 - Bon état - 82 132 km Paris <br/> <span className="price">15 280€</span></p>
            </div> 
            <div className="section__car-card disapear">
                <img src={Bmw} alt="Bmw"/>
                <p><span className="title">Bmw M3</span><br/>
                2012 - Bon état - 22 456 km Issy-les-Moulinaux <br/> <span className="price">31 000€</span></p>
            </div> 
            <div className="section__car-card disapear">
                <img src={Mercedes} alt="Mercedes"/>
                <p><span className="title">Mercedes CLA</span><br/>
                2016 - Bon état - 62 456 km Aix-en-Provence <br/> <span className="price">42 110€</span></p>
            </div> 
            <div className="section__car-card disapear">
                <img src={Clio} alt="Clio"/>
                <p><span className="title">Renault CLio 1.2 Dci 90</span><br/>
                2008 - Bon état - 102 456 km Boulogne-Billancourt<br/> <span className="price">5 360€</span></p>
            </div> 
            <div className="section__car-card disapear">
                <img src={Golf} alt="Golf"/>
                <p><span className="title">Volkswagen Golf 6 GTI série limitée</span><br/>
                2008 - Bon état - 92 456 km Issy-les-Moulineaux <br/> <span className="price">23 390€</span></p>
            </div> 
            </div>
            <Section__Sort>
            <div className="section__sort">
            <div>
                <h2>Par ville</h2>
                <button className="button__active">Marseille (+300)</button>
                <button>Paris (+700)</button>
                <button>Nancy</button>
            </div>
            <div>
                <h2>Par département</h2>
                <button>Lorraine (+40)</button>
                <button>Rhônes-Alpes </button>
            </div>
            </div>
            
            <div className="section__sort__second">
            <div>
                <h2>Par type de véhicule</h2>
                <div className="secar">
                <button>Berline (+400)</button>
                <button>4 X 4</button>
                <button>Citadine</button>
                </div>
            </div>
            <div>
                <h2>Par marque</h2>
                <button>Bmw</button>
                <button>Peugeot</button>
                <button>Renault</button>  
            </div>
            </div>
            <button className="button__announcement">Voir toutes les annonces</button>
            </Section__Sort>
        </Section__Last__Announcements>
    )
}

export default SectionLastAnnouncements;
