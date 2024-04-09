import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';

const UserDeleteButton = ({ userId }) => {
    const navigate = useNavigate();

    const handleClick = async () => {
        const confirmed = window.confirm('Are you sure you want to delete this user?');

        if (confirmed) {
            try {
                const response = await axios.delete(`https://taskholding.chullspace.com/api/user/${userId}/delete`);
                console.log('User deleted successfully:', response.data);
                alert('User deleted successfully!');
                navigate('/users');
            } catch (error) {
                console.error('Error deleting user:', error);
                alert('Error deleting user. Please try again later.');
            }
        }
    };

    return (
        <CButton color="danger" onClick={handleClick}>
            <CIcon icon={cilTrash} className="me-2" />
            Delete User
        </CButton>
    );
};

export default UserDeleteButton;
