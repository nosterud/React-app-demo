import React from 'react';
import 'eds-card';
import 'eds-button';
import 'eds-icon';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 28px;
`;

const UseCase = () => {

  return (
    <Wrapper>
        <eds-card>
        <eds-card-header>
          <eds-card-header-title>
            <eds-typography variant="h2">Use Case</eds-typography>
          </eds-card-header-title>
        </eds-card-header>
        <eds-typography variant="body_short">
            <section>
                Erdman LLC har mange web-applikasjoner og mange av dem er laget i React. De ønsker å bli sterkere innen sosial bildepublisering/håndtering og kjøper Stehr LLC. De har to applikasjoner som passer godt inn i porteføljen til Erdman LLC. Den ene er laget i Angular og den andre er skrevet uten bruk av rammeverk(JS / HTML / CSS).
            </section>
            <br/>
            <section>
                Ifbm oppkjøpet ønsker Erdman å tilpasse de to web-applikasjonene til sin designmal. De velger å benytte EDS(Erdman-Design-System), som er komponenter laget etter Web components-standarden. Web components, gir en webstandardbasert måte å lage gjenbrukbare komponenter med JS / HTML / CSS.
            </section>
            <br />
            <section>
                Ved å benytte EDS vil det være mulig å tilpasse applikasjonene uten å endre på forretningslogikken. Komponentene importeres enkelt inn i eksisterende kodebase og benyttes der man vil ønsker design etter firmastandarden. Siden EDS er basert på webstandarder, kan det benyttes i begge applikasjonene.
            </section>
        </eds-typography>
        <eds-typography variant="body_short">
            <p>Kortversjon</p>
            <ul>
                <li>Erdman kjøper Stehr </li>
                <li>
                    Stehr har 2 applikasjoner
                    <ul>
                        <li>Angular</li>
                        <li>Vanilla</li>
                    </ul>
                </li>
                <li>Erdman ønsker sitt design på applikasjonene</li>
                <li>Velger å benytte Web components/EDS</li>
                <li>Endrer Vanilla til React</li>
            </ul>
        </eds-typography>
      </eds-card>
    </Wrapper>
  )
};

export default UseCase;