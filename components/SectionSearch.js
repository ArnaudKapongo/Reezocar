import React from 'react'
import styled from 'styled-components'
import Mail from '../images/mail.png'

{/*top: 3401px */}
const Section__Search = styled.section`
   max-width: 100%;
   height: 438px;
   background: linear-gradient(0deg, rgba(0, 195, 154, 0.1), rgba(0, 195, 154, .1)),
   #F9F6F6;
   >
   img {
       height: 272.81px;
       width: 324.17px;
       position: absolute;
       left: 8.93%;
       top: 3139px;
       bottom: 18.78%;
       @media (max-width: 475px) {
           display: none;
       }
   }
   .section__container-mail {
       @media(max-width: 475px){
       display: flex;
       flex-direction: column;
       
       }
   }
   .section__container-search {
        position: absolute;
        width: 682px;
        top: 3139px;
        left: 620px;
        @media (max-width: 475px) {
            left: 22px;
            top: 3401px;
            width: 333px;
        }
        .find {
            font-weight: 800;
            font-size: 40px;
            line-height: 41px;
            color: #05668D;
            width: 682px;
            height: 96px;
            @media(max-width: 475px){
                font-size: 28px;
                line-height: 36px;
            }
        }
        > h2 {
            font-weight: 400;
            font-size: 24px;
            color: #494949;
            @media (max-width: 475px) {
                height: 45px;
                width: 333px;
                text-align: center;
                font-size: 16px;
                line-height: 20px;
                margin-top: 51px;
                margin-bottom: 58px;
            }
        }
        label {
            color: #494949;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            @media (max-width: 475px){
                display: none;
            }
        }
        input {
             margin-top: 12px;
             width: 365px;
             height: 48px;
             border-radius: 6px;
             border: 1px solid #C6C6C6;
             box-sizing: border-box;
             @media(max-width: 475px){
                 width: 333px;
                 margin-bottom: 12px;
             }
        }
        input::placeholder {
            color: #C6C6C6;
            line-height: 20px;
            padding-left: 16px;
            font-size: 16px;
        }
        input:-ms-input-placeholder {
            color: #C6C6C6;
            line-height: 20px;
            padding-left: 16px;
        }
        input::-ms-input-placeholder {
            color: #C6C6C6;
            line-height: 20px;
            padding-left: 16px; 
        }
        button {
            width: 230px;
            height: 48px;
            margin-left: 16px;
            background: #00C39A;
            border-radius: 6px;
            border: none;
            font-weight: 800;
            font-size: 16px;
            line-height: 20px;
            color: #FFFFFF;
            @media(max-width: 475px) {
                width: 333px;
                margin-left: 0px;
            }
        }
        .partner {
            color: black;
            font-weight: 600;
            line-height: 22px;
            font-size: 16px;
            
        }
         p {
             color: #494949;
             @media(max-width: 475px) {
                 text-align: center;
                 margin-top: 25px;
             }
         }
        
   }
`;

const SectionSearch = () => {
    return(
        <Section__Search>
            <img alt="Email" src={Mail}/>
            <div className="section__container-search">
                <h2><span className="find">Vous n'avez pas trouvé ?</span><br/>
                Laissez nous votre email, on se charge de tout</h2>
                <div className="section__container-mail">
                <label>Adresse email</label><br/>
                <input type="text" placeholder="Jean.dupont@monemail.com"/>
                <button>Gagner du temps</button>
                </div>
                <p><span className="partner">Notre partenaire Reezocar.com</span><br/>
                Moteur de recherche de véhicule d'occasion en Europe.</p> 

            </div>
        </Section__Search>
    )
}

export default SectionSearch;
