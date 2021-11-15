import React from 'react';
import Link from 'next/link'
import { Container, Typography, Button } from '@material-ui/core';

const Hero = (props) => (
  <>
    <Container maxWidth="sm">
      <Typography variant="h2" main center>
        Welcome To <br />
        BSEG Health Care
      </Typography>
      <Typography variant="body1">
        Where our doctors, nurses and other healthcare providers across the country are dedicated to the care and improvement of human life.
      </Typography>
      <Button onClick={props.handleClick}><Link href="/login">Login</Link></Button>
    </Container>
  </>
);

export default Hero;