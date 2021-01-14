import React from 'react';
import 'eds-card';
import 'eds-button';
import 'eds-icon';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 28px;
`;

const Pros = () => {

  return (
    <Wrapper>
        <eds-card>
        <eds-card-header>
          <eds-card-header-title>
            <eds-typography variant="h2">Hvilke fordeler har Aspire Design System </eds-typography>
          </eds-card-header-title>
        </eds-card-header>
        <eds-typography variant="body_short">
            <ul>
                <li>Hente ut kun det man trenger</li>
                <li>Ikke rammerverkbestemt</li>
                <li>Ikke avhenging av utviklere fra spesifikt miljø </li>
                <li>Mulghet for å triltrekke seg de beste utviklerene </li>
                <li>Fremtidsrettet mot endret og nye rammeverk </li>
                <li>Oversikt over pakker </li>
                <li>Mindre utviklingskostnad </li>
                <li>Lettere å implementere sitt design på web applikasjoner på kryss og tvers innad i Equinor </li>
            </ul>
        </eds-typography>
      </eds-card>
    </Wrapper>
  )
};

export default Pros;