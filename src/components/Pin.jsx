import React, {useState, useEffect, useContext} from 'react';
import 'eds-card';
import 'eds-icon';
import styled from 'styled-components';
import {firestore, auth} from '../firebase';
import { UserContext } from '../providers/UserProvider';
import 'eds-pagination';

const Wrapper = styled.div`
    padding: 28px;
    padding: 2em 0;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    & > eds-card {
        box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.1);
        margin-bottom: 28px;
    }
`;

const Pin = () => {
    const [pinData, setPinData] = useState();
    const user = useContext(UserContext);

const fetchPins = async () => {
    let user = auth.currentUser
    firestore.collection("pins").where('uid', '==', user.uid)
    .get()
    .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        setPinData(data);
    });
}

useEffect(() => {
    fetchPins();
},[]);

  return (
    <Wrapper>
        {pinData && pinData.map((item) => {
            return (
                <eds-card key={item.id}>
                    {!item.photoURL &&
                    <eds-card-media>
                        <img alt="cat" src={item.photoUrl} />
                    </eds-card-media>
                    }
                    <eds-card-header>
                        <eds-card-header-title>
                            <eds-typography variant="h3">{item.title}</eds-typography>
                            <eds-typography variant="h4">{item.description}</eds-typography>
                        </eds-card-header-title>
                    </eds-card-header>
                </eds-card>
            )
        })}
    </Wrapper>
  )
};

export default Pin;