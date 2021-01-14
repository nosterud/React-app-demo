import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../providers/UserProvider';
import NewPin from './NewPin';
import Pin from './Pin';
import DesignSystem from './DesignSystem';
import {Router} from '@reach/router';
import Settings from './Settings';
import 'eds-button';
import 'eds-icon';
import 'eds-sidesheet';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 28px;
`;

const LandingPage = () => {
  const user = useContext(UserContext);
  const {displayName} = user;

  return (
    <Wrapper>
        <h1>Hello {displayName}</h1>
        <eds-button variant="ghost_icon" id="test-sidesheet">
            <eds-icon name="add"></eds-icon>
        </eds-button>
      <NewPin />
        <Pin />
        <Router>
          <Settings path="settings" />
          <DesignSystem path="design-system" />
        </Router>
    </Wrapper>
  )
};

export default LandingPage;