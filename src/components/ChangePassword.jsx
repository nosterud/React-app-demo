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
        <div className="mb">
            <EdsTextfield
                type="password"
                label="Old Password"
                placeholder="Password"
            />
        </div>
        <div className="mb">
            <EdsTextfield
                type="password"
                placeholder="New Password"
                label="Change username"
            />
        </div>
        <div className="mb">
            <EdsTextfield
                type="password"
                placeholder="Password"
                label="New password again"
            />
        </div>
    </Wrapper>
  )
};

export default Settings;