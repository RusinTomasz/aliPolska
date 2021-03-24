import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Container from "../styles/shared/Container";
import { colors } from "../styles/variables";

const MainNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavList = styled.li`
  list-style: none;
  margin: 0 10px;
`;

const MainNavLink = styled.a`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 3px;
  padding: 20px 10px;
  display: inline-block;
  color: white;
`;

const HeaderContent = styled.header`
  background-color: ${colors.violette};
`;

const Header = () => {
  return (
    <HeaderContent>
      <Container>
        <MainNav>
          <NavList>
            <Link href="/" passHref>
              <MainNavLink>Home</MainNavLink>
            </Link>
          </NavList>
          <NavList>
            <Link href="/aktualnosci" passHref>
              <MainNavLink>Aktualności</MainNavLink>
            </Link>
          </NavList>
          <NavList>
            <Link href="/aktualnosci/najlepsze-sukienki-na-aliexpress" passHref>
              <MainNavLink>Sukienki</MainNavLink>
            </Link>
          </NavList>
        </MainNav>
      </Container>
    </HeaderContent>
  );
};

export default Header;
