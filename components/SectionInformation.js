import React from 'react'
import styled from 'styled-components'
import Carexport from '../images/carexport.png'
import Insurance from '../images/assurance.png'

{/*3935px */}
const Section__Information = styled.section`
    max-width: 100%;
    height: 971px;
    @media(max-width: 475px){
        height: 1602px;
    }
    >
    h2 {
        position: absolute;
        top: 3576px;
        left: 130px;
        color: #494949;
        font-size: 40px;
        height: 144px;
        width: 960px;
        @media (max-width: 475px){
            width: 331.94px;
            height: 144px;
            left: 23.06px;
            font-size: 28px;
            line-height: 36px;
            top: 3855px;
        }
    }   
    .pos {
        @media(max-width: 475px){
            margin-top: 130px;
            
            }
        }
    .section__content-information {
        position: absolute;
        left: 131px;
        top: 3784px;
        @media(max-width: 475px) {
            left: 0px;
            top: 3910px;
        }
    }
    .section__container-information {
        display: flex;
        align-items: center;
        @media( max-width: 475px) {
            flex-direction: column;
            
        }
        
        h5, .verify {
            @media(max-width: 475px){
               width: 290.71px;
               height: 76px;
               left: 23.06px;
               line-height: 35px;
               font-size: 12px;
            }
        }
         .square__information {
            background: #0094C3;
            color: white;
            font-size: 90px;
            justify-content: center;
            line-height: 35px;
            font-weight: 800;
            display: flex;
            align-items: center;
        }
        img, .square__information {
            border-radius: 6px;
            width: 280px;
            height: 182px;
            margin-right: 60px;
            @media(max-width: 475px){ 
                width: 331.94px;
                transform: translateX(27px);
                
            }
        }
        p {
            @media(max-width: 475px){
                width: 331.94px;
                height: 23.06px;
                font-size: 14px;
                line-height: 24px;
               
            }
        }
      
    }
    
`;

const SectionInformation = () => {
    return(
       <Section__Information>
       <h2>Toute l'information<br/> pour bien <span className="purchase">acheter</span> ou <span className="sale">vendre</span> une voiture d'occasion</h2>
       <div className="section__content-information">
            <div className="section__container-information">
            <div className="pos">
            <img alt="Reezocar blog" src={Carexport}/>
            </div>
            <div className="container__information-paragraph">
                <h5>Guides D'achat <br/><span className="verify">les points à vérifier en premier</span></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sed dignissim neque,
                Pellentesque lacinia, metus vel aliquam iaculis, sem augue vestibulum eros, eu convallis magna
                <br/>libero vitae leo.</p>
            </div>
            </div>
            <div className="section__container-information">
            <div className="pos">
            <img alt="Assurance Reezocar" src={Insurance}/>
            </div>
            <div className="container__information-paragraph">
                <h5>Infos pratiques <br/><span className="verify">Ne pas se faire avoir</span></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sed dignissim neque,
                Pellentesque lacinia, metus vel aliquam iaculis, sem augue vestibulum eros, eu convallis magna
                <br/>libero vitae leo.</p>
            </div>
            </div>
            <div className="section__container-information">
            <div className="pos">
            <div className="square__information">
                <span>?</span>
            </div>
            </div>
            <div className="container__information-paragraph">
                <h5>Foire aux questions <br/><span className="verify">Comment changer de ventilateur ?</span></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sed dignissim neque,
                Pellentesque lacinia, metus vel aliquam iaculis, sem augue vestibulum eros, eu convallis magna
                <br/>libero vitae leo.</p>
            </div>
            </div>
       </div>
       </Section__Information> 
    )
}

export default SectionInformation;
