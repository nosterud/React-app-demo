import React, {useContext} from 'react';
import 'eds-top-bar';
import 'eds-menu';
import 'eds-sidesheet';
import 'eds-button';
import Logo from '../assets/logo-square.png'
import {auth} from '../firebase';
import styled from 'styled-components';
import {Link} from '@reach/router';

const Wrapper = styled.div`
    width: 100%;
    display: block;
`;

const RightWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const ImgLogo = styled.img`
    width: 55px;
`;

function Header() {
    return (
      <Wrapper>
          <eds-top-bar className="headerComp">
            <Link to="/">
                <ImgLogo src={Logo} alt="Logo"/>
            </Link>
              <RightWrapper>
                    <eds-button id="main-menu-btn" variant="ghost_icon">
                        <eds-icon name="menu"></eds-icon>
                    </eds-button>
                </RightWrapper>
            <eds-menu id="menu" open="false" anchor-id="main-menu-btn">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <eds-menu-item>
                        <eds-icon name="home"></eds-icon>Home Page
                    </eds-menu-item>
                </Link>
                <Link to="/settings" style={{ textDecoration: 'none' }}>
                    <eds-menu-item>
                        <eds-icon name="settings"></eds-icon>Settings
                    </eds-menu-item>
                </Link>
                <Link to="/design-system" style={{ textDecoration: 'none' }}>
                    <eds-menu-item>
                        <eds-icon name="library_image"></eds-icon>Design system
                    </eds-menu-item>
                </Link>
                <eds-menu-item>
                    <eds-icon name="face"></eds-icon>Sign in
                </eds-menu-item>
                <eds-menu-item>
                   <eds-button onClick={() => auth.signOut()}>Sign out</eds-button>
                </eds-menu-item>
            </eds-menu>
          </eds-top-bar>
      </Wrapper>
    );
  }
  
  export default Header;