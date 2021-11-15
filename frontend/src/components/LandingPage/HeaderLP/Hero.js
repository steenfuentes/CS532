import React from 'react';
import Link from 'next/link'
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@mui/styles'
import styles from "../../../assets/styling/components/Hero/HeroStyling";


export default function Hero(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <>
      <Container align="center" style={{ marginTop: '20px' }} maxWidth="sm">
        <Typography variant="h2" main center>
          Welcome To <br />
          BSEG Health Care
        </Typography>
        <Typography align="center" color="text.secondary" variant="h5">
          Where our doctors, nurses and other healthcare providers across the country are dedicated to the care and improvement of human life.
        </Typography>
        <Link href="/login">
          <Button style={{ fontSize: '15px', color: '#fff', background: '#1976d2', padding: '10px 20px', marginTop: '20px' }}>Login</Button></Link>
      </Container>
    </>
  )
}

