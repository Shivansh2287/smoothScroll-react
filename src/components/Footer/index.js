import React from 'react'
import { FaInstagram,FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FooterContainer,
    FooterWrap,FooterLinksContainer,
     FooterLinksWrapper,FooterLinkItems,
     FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialIconLink,SocialLogo,WebsiteRights,SocialIcons} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {

     const toggleHome =()=>{
            scroll.scrollToTop()
        }
    return (
        <FooterContainer>
                <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                            <FooterLink to='/signin'>How it work </FooterLink> 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>dolla {new Date().getFullYear()}all rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank'
                            aria-label='Facebook'>
                            <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'
                            aria-label='Facebook'>
                            <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'
                            aria-label='Facebook'>
                            <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'
                            aria-label='Facebook'>
                            <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'
                            aria-label='Facebook'>
                            <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>           
        </FooterContainer>
    )
}

export default Footer
