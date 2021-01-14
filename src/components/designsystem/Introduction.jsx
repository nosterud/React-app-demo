import React from 'react';
import 'eds-card';
import 'eds-button';
import 'eds-icon';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 28px;
`;

const Introduction = () => {

  return (
    <Wrapper>
        <eds-card>
        <eds-card-header>
          <eds-card-header-title>
            <eds-typography variant="h2">Introduksjon</eds-typography>
            <eds-typography variant="body_short">Hva er Aspire designsystem?</eds-typography>
          </eds-card-header-title>
        </eds-card-header>
        <eds-typography variant="body_short">
            <ul>
                <li>HTML5 Web Components </li>
                <li>Fleksibelt</li>
            </ul>
        </eds-typography>
        <eds-typography variant="body_short">Problemstilling</eds-typography>
        <eds-typography variant="body_short">
            <ul>
                <li>Kostnader om et rammeverk skal flyttes til et annet rammeverk  </li>
                <li>En risiko at ulike prosjekter bruker forskjellige rammeverk for å utvikle </li>
            </ul>
        </eds-typography>
      </eds-card>
    </Wrapper>
  )
};

export default Introduction;