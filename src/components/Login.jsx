import React, {useState} from 'react';
import {auth} from '../firebase';
import {EdsTextfield} from 'eds-textfield-react';
import 'eds-card';
import 'eds-button';
import 'eds-typography';
import styled from 'styled-components';
import {Link} from '@reach/router';

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    align-content: center;
    padding: 64px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-around;
`;

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
      event.preventDefault();
      auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
      });
    };
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

    return(
        <Wrapper>
            <eds-card>
                <eds-card-header>
                    <eds-card-header-title>
                        <eds-typography variant="h1">Login</eds-typography>
                    </eds-card-header-title>
                </eds-card-header>
                <EdsTextfield
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    placeholder="Epost adresse"
                    label="Epost"
                    value={email}
                    onValueChange={(e) => onChangeHandler(e)} />
                <EdsTextfield
                    placeholder="Passord"
                    label="Passord"
                    type="password"
                    value={password}
                    name="userPassword"
                    onValueChange={(e) => onChangeHandler(e)} />
                <ButtonWrapper>
                    <eds-button 
                        variant="primary"
                        onClick={(e => {signInWithEmailAndPasswordHandler(e, email, password)})}>
                        Login
                    </eds-button>
                    <Link to="signUp">
                        <eds-button variant="ghost">
                            Create new user
                        </eds-button>
                    </Link>
                 </ButtonWrapper>
            </eds-card>
        </Wrapper>
    )
}

export default SignIn;