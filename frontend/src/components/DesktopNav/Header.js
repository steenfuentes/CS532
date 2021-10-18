import Link from 'next/link';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { IoMdHelpCircle } from 'react-icons/io'
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Services</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Impact</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://google.com">
        <AiFillHeart size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <IoMdHelpCircle size="3rem" />
      </SocialIcons>

    </Div3>
  </Container>
);

export default Header;
