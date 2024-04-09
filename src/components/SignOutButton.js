import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOutButton = () => {
    const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('userData');
    navigate('/login');
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
};

export default SignOutButton;
