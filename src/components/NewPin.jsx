import React, {useState} from 'react';
import 'eds-button';
import 'eds-icon';
import 'eds-sidesheet';
import 'eds-textfield-react';
import styled from 'styled-components';
import {firestore, auth} from '../firebase';
import { EdsTextfield } from 'eds-textfield-react';
import userEvent from '@testing-library/user-event';

const Wrapper = styled.div`
    padding: 28px;
`;

const NewPin = () => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;
          console.log('onchange', value);
        if(name === 'title') {
            setTitle(value)
            console.log('value', title);
        }
        else if(name === 'description'){
          setDesc(value);
        } 
        else if (name === 'photoUrl') {
            setPhotoUrl(value);
        }
    };

    const sendTodo = () => { 
    let user = auth.currentUser
    firestore.collection('pins').add({title: title, description: desc, photoUrl: photoUrl, uid: user.uid })
    .then(documentReference => {
      console.log('document reference ID', documentReference.id)
    })
    .catch(error => {
      console.log(error.message)
    })

  }

  return (
    <Wrapper>
        <eds-sidesheet trigger-id="test-sidesheet" variant="large">
            <eds-typography variant="h1">Add Pin</eds-typography>
            <EdsTextfield label="Title" name="title" value={title} onValueChange={(e) => onChangeHandler(e)}></EdsTextfield>
            <EdsTextfield label="Description" name="description" value={desc} onValueChange={(e) => onChangeHandler(e)}></EdsTextfield>
            <EdsTextfield label="Image Url" name="photoUrl" value={photoUrl} onValueChange={(e) => onChangeHandler(e)}></EdsTextfield>
            <eds-button onClick={sendTodo}>Add pin</eds-button>
        </eds-sidesheet>
    </Wrapper>
  )
};

export default NewPin;