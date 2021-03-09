import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import MeilleureReprise  from '../images/MeilleureReprise.png'

const Navbar = styled.header`
    height: 72px;
    max-width: 100%;
    width: 100%;
    
    >
    img {
    position: absolute;
    left: 131px;
    top: 16px;

    @media (max-width: 475px) {
    left: 22px;
    }
    }
`;
const Button__Header = styled.button`
    width: 230px;
    height: 48px;
    background: #00C39A;
    border-radius: 6px;
    text-align: center;
    line-height: 20px;
    font-size: 16px;
    font-weight: 800;
    font-style: normal;
    color: #FFFFFF;
    border: none;
    margin-left: 39px;
    @media (max-width: 475px) {
       display: none;
    }
`;

const Nav = styled.nav`
    display: flex;
    position: absolute;
    right: 130px;
    top: 12px;
    font-size: 16px;

    > 
    ul {
    display: flex;
    >
    li {
    list-style: none;
    color: #494949;
    font-weight: 600;
    font-size: 16px;
    margin-left: 30px;
    }
    }
    @media (max-width: 475px) {
        display: none;
     }
   
`;

const Header = () => {
    return(
       <Navbar>
       <img alt="Meilleure Reprise logo" src={MeilleureReprise}/> 
           <Nav>
            <ul>
                <li>
                    <Link href='/'>Acheter</Link>
                </li>
                <li>
                    <Link href='/'>Conseils</Link>
                </li>
                <li>
                    <Link href='/'>Qui sommes-nous ?</Link>
                </li>
            </ul>
            <Button__Header>Vendre ma voiture</Button__Header>
           </Nav>
       </Navbar>
    )
}

export default Header;
