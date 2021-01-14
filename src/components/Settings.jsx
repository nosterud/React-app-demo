import React, {useContext} from 'react';
import { UserContext } from '../providers/UserProvider';
import 'eds-button';
import 'eds-icon';
import 'eds-tabs';
import styled from 'styled-components';
import ChangeSettings from './ChangeSettings';
import ChangePassword from './ChangePassword';

const Wrapper = styled.div`
    padding: 28px;
`;

const Settings = () => {
  const user = useContext(UserContext);

  return (
    <Wrapper>
        <eds-tabs>
            <eds-tab active label="Settings">
                <ChangeSettings />
            </eds-tab>
            <eds-tab label="Password">
                <ChangePassword />
            </eds-tab>
        </eds-tabs>
    </Wrapper>
  )
};

export default Settings;