import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ServicesStyles';
import { Card, Grid, CardContent, CardActions, CardMedia, Button, Typography } from '@mui/material'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const services = [
  {
    title: 'Insurance Billing',
    description: "description",
    image: '/images/1.jpg',
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 0,
  },
  {
    title: 'Access Your Records',
    description: "description",
    image: '/images/2.jpg',
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 1,
  },
  {
    title: 'New Here? Register',
    description: "description",
    image: '/images/3.jpg',
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Schedule an Appointment',
    description: "description",
    image: '../ima',
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
];


const Services = () => (
  <Section nopadding id="services">
    <SectionDivider />
    <SectionTitle main>Services</SectionTitle>
    <GridContainer>
      {services.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Services;