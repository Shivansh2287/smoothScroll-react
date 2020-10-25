import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesP,ServicesH2 } from './ServiceElements';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our servicces</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expense</ServicesH2>
                    <ServicesP>lorem lorem orem lorem lorem 
                        fsfdsfdsf</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Reduce expense</ServicesH2>
                    <ServicesP>lorem lorem orem lorem lorem 
                        fsfdsfdsf</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce expense</ServicesH2>
                    <ServicesP>lorem lorem orem lorem lorem 
                        fsfdsfdsf</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
