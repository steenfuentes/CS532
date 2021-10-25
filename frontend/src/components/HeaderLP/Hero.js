import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          BSEG Health Care
        </SectionTitle>
        <SectionText>
          Where our doctors, nurses and other healthcare providers across the country are dedicated to the care and improvement of human life.        </SectionText>
        <Button onClick={props.handleClick}>Login</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;