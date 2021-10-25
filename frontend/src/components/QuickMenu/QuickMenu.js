import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { BoxNum, BoxText } from './QuickMenuStyles';
import { Card, Grid } from '@mui/material';


const data = [
  { number: "Lab", text: 'Lab Order Tracking' },
  { number: "Pharmacy", text: 'Pharmacy Order Tracking', },
  { number: "Billing", text: 'Manage Insurance Billing', },
  { number: "Schedule", text: 'Physician-Patient Appointments', },
];

const QuickMenu = () => (
  <Section>
    <SectionTitle>Quick Menu</SectionTitle>
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      {data.map((card, index) => (
        <Grid key={index} item md={3} xs={6}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <BoxNum>{`${card.number}`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Card>
        </Grid>
      ))}
    </Grid>
    <SectionDivider />
  </Section>
);

export default QuickMenu;
