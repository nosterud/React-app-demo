import React, {useContext, useState} from 'react';
import { UserContext } from '../providers/UserProvider';
import 'eds-button';
import 'eds-icon';
import {auth} from '../firebase';
import * as firebase from 'firebase/app';
import styled from 'styled-components';
import { EdsTextfield } from 'eds-textfield-react';

const Wrapper = styled.div`
    padding: 28px;
`;

const Settings = () => {
  const userContext = useContext(UserContext);
    const [updateUsername, setUsername] = useState('');  
    const [updatePhonenumber, setPhoneNumber] = useState('');  
    const user = auth.currentUser;

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "username") {
            setUsername(value);
        } else if (name === "phonenumber") {
            setPhoneNumber(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        user.updateProfile({
            displayName: updateUsername,
            phonenumber: updatePhonenumber,
            }).then(function() {
            console.log('success', user)
            }).catch(function(error) {
                console.log('Bad støff');
            });
    }

  return (
    <Wrapper>
        <form onSubmit={handleSubmit}>
            <EdsTextfield
                type="text"
                label="Email"
                aria-readonly
                value={userContext.email}
            />
            <EdsTextfield
                type="text"
                placeholder="Username"
                name="username"
                label="Change username"
                value={updateUsername}
                onValueChange={e => onChangeHandler(e)}
            />
            <EdsTextfield
                type="text"
                placeholder="Phonenumber"
                label="Change phonenumber"
                name="phonenumber"
                value={updatePhonenumber}
                onValueChange={e => onChangeHandler(e)}
            />
            <eds-button type="submit" variant="primary">Submit</eds-button>
        </form>
    </Wrapper>
  )
};

export default Settings;