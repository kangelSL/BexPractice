import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import AccountDropdown from '../../container/account/AccountDropdown';

const AccountDropdownComponent = () => (
    <div>
        <Card style={{ padding: 5 }}>
            <AccountDropdown />
        </Card>
    </div>
);

export default AccountDropdownComponent;