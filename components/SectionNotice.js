import React from 'react'
import styled from 'styled-components'
import Florence from '../images/florence.png'
import Georges from '../images/georges.png'
import David from '../images/david.png'

const Section__Notice = styled.section`
   background: rgba(5, 102, 141, .1);
   max-width: 100%;
   height: 470px;
   @media (max-width: 475px) {
            height: 323px;
   }
   > 
   h2 {
    font-weight: bold;
    font-size: 40px;
    line-height: 49px;
    color: #353535;
    position: absolute;
    left: 130px;
    top: 797px;
    @media (max-width: 475px){
        font-size: 28px;
        line-height: 16px;
        left: 21px;
        top: 742px;
    }
   }
   .card__text {
       display: flex;
       flex-direction: column;
       margin-left: 12px;
   }
   .section__notice-content {
       display: flex;
       top: 891px;
       position: absolute;
       left: 130px;
       @media (max-width: 475px){
       left: 22px;
       top: 785px;
       }
   }
   .section__notice-card {
       width: 380px;
       height: 220px;
       background: #FFFFFF;
       border-radius: 6px;
       margin-top: 15px;
       margin-right: 20px;
       box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.17);
       -webkit-box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.17);
       -moz-box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.1);
       img {
           margin-left: 30px;
           border-radius: 50%;
           @media (max-width: 475px){
               width: 31px;
               height: 31px;
               margin-left: 20px;
           }
       }
       @media (max-width: 475px){
        width: 213px;
        height: 166px; 
        }
   }
   .section__notice-card-content {
       display: flex;
       
   }
   .card__name {
       font-size: 14px;
       line-height: 17px;
       font-weight: 800;
       @media (max-width: 475px){
           font-size: 12px;
           line-height: 16px;
       }
   }
   .card__profil {
       color: #494949;
       line-height: 17px;
       @media (max-width: 475px) {
           font-size: 12px;
       }
   }
   .david, .georges {
       @media (max-width: 475px){
           display: none;
       } 
   }
   p {
       font-size: 16px;
       color: #353535;
       line-height: 26px;
       padding-left: 32px;
       padding-top: 25px;
       padding-right: 32px;
       @media (max-width: 475px) {
           font-size: 12px;
           line-height: 16px;
           padding-left: 20px;
           padding-top: 0px;   
       }
   }
   
   
`;

const SectionNotice = () => {
    return(
        <Section__Notice>
            <h2>Avis Clients</h2>
            <div className="section__notice-content">
                <div className="section__notice-card">
                    <p>“ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion“</p>
                    <div className="section__notice-card-content">
                    <img alt="Florence" src={Florence}/>
                    <div className="card__text">
                    <span className="card__name">Florence</span>
                    <span className="card__profil">Directrice de sex-shop</span>
                    </div>
                    </div>
                </div> 
                <div className="section__notice-card georges">
                    <p>“ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion“</p>
                    <div className="section__notice-card-content">
                    <img alt="Georges" src={Georges}/>
                    <div className="card__text">
                    <span className="card__name">Georges</span>
                    <span className="card__profil">CTO</span>
                    </div>
                    </div>
                </div>
                <div className="section__notice-card david">
                    <p>“ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion“</p>
                    <div className="section__notice-card-content">
                    <img alt="David" src={David}/>
                    <div className="card__text">
                    <span className="card__name">David</span>
                    <span className="card__profil">Monteur vidéo</span>
                    </div>
                    </div>
                </div>
            </div> 
        </Section__Notice>
    )
}


export default SectionNotice;
