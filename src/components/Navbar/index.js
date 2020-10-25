import React ,{useEffect, useState}from 'react'
import { Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLink,NavBtn,NavBtnLink } from "./NavbarElements";
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {

    const [scrollNav,setScollNav]= useState(false)

        const changeNav =()=>{
            if(window.scrollY >= 80){
                setScollNav(true)}
            else{
                setScollNav(false)
                }
            }
        

        useEffect(()=>{
        window.addEventListener('scroll',changeNav)
        },[])

        const toggleHome =()=>{
            scroll.scrollToTop()
        }

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>dolla</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLink>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
