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
           <section>
           Webkomponenter er et sett med API-er som lar deg lage nye egendefinerte, gjenbrukbare, innkapslede HTML-tags for bruk i websider. De fungerer på tvers av nettlesere og kan brukes med hvilket som helst JavaScript-bibliotek/rammeverk som fungerer med HTML. Webkomponenter gjør at webutviklere enkelt kan utvide HTML med nye elementer med innkapslet styling og tilpasset oppførsel. De kan også utstyres med et api som gjør at brukeren kan tilpasse oppførselen og/eller utseende til komponenten.
           </section>
           <br />
           <section>
           Front-end-miljøet er kjent for å levere store mengder nye verktøy, rammer, biblioteker og teknologier som vi kan bruke. Siden webkomponenter er bygget på nettstandarder, vil de fungere på tvers, og dette har noen klare fordeler:
           <ul>
               <li>
                   Interoperabilitet
                   <ul>
                       <li>Komponentene kan benyttes i flere prosjekter med forskjellige teknologi</li>
                   </ul>
                </li>
                <li>
                Levetid
                <ul>
                    <li>De vil kunne ha lengre levetid og det vil være lite behov for å skrive de om for å passe inn i nye teknologier</li>
                </ul>
                </li>
                <li>
                    Lavere terskel
                    <ul>
                        <li>Siden de benytter åpne standarder og ikke er avhengig av et spesielt rammeverk/bibliotek, er terskelen for å ta i bruk/teste komponenten lav</li>
                    </ul>
                </li>
           </ul>
           </section>
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