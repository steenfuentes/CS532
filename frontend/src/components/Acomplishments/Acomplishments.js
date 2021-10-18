import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Health Care Facilities' },
  { number: 1000, text: 'Doctors', },
  { number: "Rated", text: 'Some Info', },
  { number: "Rated", text: 'Some Info', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Quick Menu/CTA/</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
