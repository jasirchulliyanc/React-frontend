import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CIcon from '@coreui/icons-react'
import { cilBell } from '@coreui/icons'
import { CButton } from '@coreui/react';
const UserButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to a new route
        navigate('/userForm');
    };

    return (
        <CButton
            color="primary"
            key={1}
            active={true}
            disabled={false} onClick={handleClick}
        >
            <CIcon icon={cilBell} className="me-2" />
            Add User
        </CButton>
    );
};

export default UserButton;
