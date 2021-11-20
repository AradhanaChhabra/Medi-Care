import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesP, ServicesIcon, ServicesWrapper } from './ServicesElements'
import Icon1 from '../../assets/svg3.svg'
import Icon2 from '../../assets/svg2.svg'
import Icon3 from '../../assets/svg9.svg'

export const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>

                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Managing Health Records</ServicesH2>
                    <ServicesP>
                    Keeping and maintaining logs of your personal medical records.
                    </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Appointments</ServicesH2>
                    <ServicesP>
                    Making appointments with physicians, medical tests, vaccinations etc.
                    </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Visualize data</ServicesH2>
                    <ServicesP>
                    Visualizing medical/health data by means of statistics and graph.
                    </ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}
