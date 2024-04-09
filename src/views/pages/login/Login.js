import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://taskholding.chullspace.com/api/login', formData);
      console.log('Form submitted successfully:', response.data);

      const userData = await response.data.data;
      console.log(userData);
      console.log('login details:', userData);
      localStorage.setItem('userData', JSON.stringify(userData));  
      
      if (userData.role === 'systemAdmin') {
       
          navigate('/users');
      } else if (userData.role === 'HR') {
        navigate('/hr');
      } else if (userData.role === 'user') {
        navigate('/employee');
      }
          
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCard className="p-4">
              <CCardBody>
                <CForm onSubmit={handleSubmit}>
                  <h1>Login</h1>
                  <p className="text-body-secondary">Sign In to your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      placeholder="Username"
                      autoComplete="username"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CButton type="submit" color="primary" className="px-4">
                    Login
                  </CButton>
                  <CButton color="link" className="px-0">
                    <Link to="/forgot-password">Forgot password?</Link>
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
      
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
