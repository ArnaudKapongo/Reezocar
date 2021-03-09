import React from 'react'
import styled from 'styled-components'
import MeilleureReprise  from '../images/MeilleureReprise.png'

const Footer_ = styled.footer`
    max-width: 100%;
    height: 552px;
    background: #F9F6F6;
    border: 1px solid #F9F6F6;
    box-sizing: border-box;
    @media(max-width: 475px){
        height: 816px;
        
    }
    li {
        list-style: none;
    }
    img {
        position: relative;
        left: 130px;
        top: 441px;
        @media(max-width: 475px){
            left: 134px;
            top: 633px;
        }
    }
    .section__footer {
        display: flex;
        position: absolute;
        left: 129px;
        @media(max-width: 475px){
            left: 22px;
        }
    }
    .depose {
        position: absolute;
        left: 430px;
        @media(max-width: 475px){
            left: 22px;
           display: none;
        }
    }
    .auto {
        position: absolute;
        left: 732px;
         @media(max-width: 475px){
            left: 22px;
             display: none;
        }
    }
    .info {
        position: absolute;
        left: 1032px;
         @media(max-width: 475px){
            left: 22px;
             display: none;
        }
    }
    .section__footer-title {
            color: #494949;
            font-weight: 800;
            font-size: 16px;
            width: 274px;
            height: 6px;
            display: block;   
        }
    .section__footer-content {
        padding-top: 112px;
        li {
            margin-bottom: 36px;
            color: #494949; 
        }
        li:not(:first-child) {
            text-decoration: underline;
        }  
    }
`;

const Footer = () => {
    return(
       <Footer_>
           <div className="section__footer">
                <div className="section__footer-content">
                <li><span className="section__footer-title">Annonces auto</span></li>
                <li>Toute la france</li>
                <li>Par département</li>
                <li>Par ville</li>
                <li>Par marque</li>
                </div>
                <div className="section__footer-content depose">
                <li><span className="section__footer-title">Déposer une annonce</span></li>
                <li>à Paris</li>
                <li>à Bordeaux</li>
                <li>à Marseille</li>
                <li>à Lille</li>
                </div>

                <div className="section__footer-content auto">
                <li><span className="section__footer-title">Reprise Auto</span></li>
                <li>Obtenir un prix de reprise<br/>de cas</li>
                <li>Côter mon véhicule</li>
                </div>

                <div className="section__footer-content info">
                <li><span className="section__footer-title">Informations et démarques</span></li>
                <li>Guide d'achat</li>
                <li>Guide de vente</li>
                <li>Foire aux questions</li>
                <li>Infos pratiques</li>
                </div>
           </div>
           <img alt="Meilleure Reprise logo" src={MeilleureReprise}/> 
        </Footer_> 
    )
}

export default Footer;
