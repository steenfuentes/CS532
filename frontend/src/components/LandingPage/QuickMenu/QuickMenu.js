import React from 'react';

import { Card, Grid } from '@mui/material';
import { Typography, Container } from '@material-ui/core';


const data = [
  { number: "Lab", text: 'Lab Order Tracking' },
  { number: "Pharmacy", text: 'Pharmacy Order Tracking', },
  { number: "Billing", text: 'Manage Insurance Billing', },
  { number: "Schedule", text: 'Physician-Patient Appointments', },
];

export default function QuickMenu() {
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h1">Quick Menu</Typography>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          {data.map((card, index) => (
            <Grid key={index} item md={3} xs={6}>
              <Card sx={{ backgroundColor: 'transparent' }}>
                <Typography variant="h4">{`${card.number}`}</Typography>
                <Typography variant="body1">{card.text}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
