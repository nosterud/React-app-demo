import React, {useContext} from 'react';
import { UserContext } from '../providers/UserProvider';
import 'eds-button';
import 'eds-icon';
import styled from 'styled-components';
import { EdsTextfield } from 'eds-textfield-react';

const Wrapper = styled.div`
    padding: 28px;
`;

const Settings = () => {
//   const user = useContext(UserContext);

  return (
    <Wrapper>
        <EdsTextfield
            type="password"
            label="Old Password"
            placeholder="Password"
        />
        <EdsTextfield
            type="password"
            placeholder="New Password"
            label="Change username"
        />
        <EdsTextfield
            type="password"
            placeholder="Password"
            label="New password again"
        />
    </Wrapper>
  )
};

export default Settings;