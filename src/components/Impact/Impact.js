import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './ImpactStyles';

const Impact = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Impact</SectionTitle>
    <SectionText>
      BSEG has demonstrated a strong commitment to stand with our members and communities. Two constants over that time have been our strong local presence and deeply rooted relationships, which have enabled us to better understand and help overcome the unique challenges to accessing care that exist within some of our communities.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Corporate Social Responsibility</ListTitle>
          <ListParagraph>
            Doing
            Everything
            in Our Power
            <br />
            During the
            Pandemic
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Healthy Kids, Healthy Families</ListTitle>
          <ListParagraph>
            Doing
            Everything
            in Our Power
            <br />
            During the
            Pandemic
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Diversity, Equity and Inclusion</ListTitle>
          <ListParagraph>
            At BSEG we support an environment where all employees feel valued,
            <br /> empowered and recognized for their unique talents, perspectives and differences.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Impact;
