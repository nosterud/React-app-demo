import React from 'react';
import 'eds-card';
import 'eds-button';
import 'eds-icon';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 28px;
`;

const Challenges = () => {

  return (
    <Wrapper>
        <eds-card>
        <eds-card-header>
          <eds-card-header-title>
            <eds-typography variant="h2">Hvilke utfordringer har Aspire Design System</eds-typography>
          </eds-card-header-title>
        </eds-card-header>
        <eds-typography variant="body_short">
            <ul>
                <li>Enkelte rammeverk krever spesialtilpasset komponent for å benytte seg av proptyper utover strings </li>
                <li>Eldre nettlesere som ikke støtter Custom Elements og Shadow Dom </li>
                <li>Må lage alle komponentene dere trenger først, før det kan tas i bruk  </li>
            </ul>
        </eds-typography>
      </eds-card>
    </Wrapper>
  )
};

export default Challenges;