import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import AccountDropdown from '../../container/account/AccountDropdown';

const AccountDropdownComponent = () => (
    <div>
        <Card>
            <Card.Body>Account Selector</Card.Body>
            <AccountDropdown />
        </Card>
    </div>
);

export default AccountDropdownComponent;