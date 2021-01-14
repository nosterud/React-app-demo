import React from 'react';
import 'eds-card';
import 'eds-button';
import 'eds-icon';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 28px;
`;

const HowTo = () => {

  return (
    <Wrapper>
        <eds-card>
        <eds-card-header>
          <eds-card-header-title>
            <eds-typography variant="h2">Hvordan fungerer Aspire Design System </eds-typography>
          </eds-card-header-title>
        </eds-card-header>
        <eds-typography variant="body_short">
            <ul>
                <li>Komponenter splittet i pakker </li>
                <li>Pakker inneholder komponenter som har tilhørlighet til hverandre </li>
            </ul>
        </eds-typography>
      </eds-card>
    </Wrapper>
  )
};

export default HowTo;