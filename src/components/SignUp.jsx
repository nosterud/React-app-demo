import React, { useState } from 'react';
import {auth, generateUserDocument} from '../firebase';
import {Link} from '@reach/router';
import {EdsTextfield} from 'eds-textfield-react';
import 'eds-card';
import 'eds-button';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    align-content: center;
    margin: 28px;
    height: 100%;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-around;
`;

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        event.preventDefault();
        try{
          const {user} = await auth.createUserWithEmailAndPassword(email, password);
          generateUserDocument(user);
        }
        catch(error){
          setError('Error Signing up with email and password');
        }
        setEmail("");
        setPassword("");
      };

      const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        console.log(value, 'target email');
        if (name === "userEmail") {
          setEmail(value);
        } else if (name === "userPassword") {
          setPassword(value);
        }
      };

    return(
        <Wrapper>
            <div>
                {error !== null && (
                    <div>
                        {error}
                    </div>
                )}
            </div>
            <form>
            <eds-card>
                <eds-card-header>
                    <eds-card-header-title>
                        Sign Up
                    </eds-card-header-title>
                </eds-card-header>
                <EdsTextfield
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    placeholder="Epost adresse"
                    label="Epost"
                    value={email}
                    onValueChange={e => onChangeHandler(e)}
                    />
                <EdsTextfield
                    label="Passord"
                    name="userPassword"
                    id="userPassword"
                    type="password"
                    value={password}
                    onValueChange={e => onChangeHandler(e)}
                    />
                <ButtonWrapper>
                    <eds-button
                    variant="primary" 
                    onClick={e => {createUserWithEmailAndPasswordHandler(e, email, password);}}>
                        SignUp
                    </eds-button>
                    <Link to="/">
                        <eds-button variant="ghost">
                            Login
                        </eds-button>
                    </Link>
                </ButtonWrapper>
            </eds-card>
            </form>
        </Wrapper>
    )
}

export default SignUp;