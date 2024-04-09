import React, { useState } from 'react';
import axios from 'axios';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CRow,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
const Layout = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        position: '',
        email: '',
        password: '',
        role: '', // Added role field
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://taskholding.chullspace.com/api/user/create', formData);
            console.log('Form submitted successfully:', response.data);
            
            navigate('/users');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>User</strong> <small>Form</small>
                    </CCardHeader>
                    <CCardBody>
                        <CForm onSubmit={handleSubmit}>
                            <CCol md={6}>
                                <CFormLabel htmlFor="first_name">First Name</CFormLabel>
                                <CFormInput type="text" id="first_name" name="first_name" required value={formData.first_name} onChange={handleChange} />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel htmlFor="last_name">Last Name</CFormLabel>
                                <CFormInput type="text" id="last_name" name="last_name" required value={formData.last_name} onChange={handleChange} />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel htmlFor="email">Email</CFormLabel>
                                <CFormInput type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel htmlFor="position">Position</CFormLabel>
                                <CFormInput type="text" id="position" name="position" required value={formData.position} onChange={handleChange} />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel htmlFor="password">Password</CFormLabel>
                                <CFormInput type="password" id="password" name="password" required value={formData.password} onChange={handleChange} />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel htmlFor="role">Role</CFormLabel>
                                <CFormSelect id="role" name="role" value={formData.role} onChange={handleChange}>
                                    <option>Choose...</option>
                                    <option value="systemAdmin">System Admin</option>
                                    <option value="HR">Hr</option>
                                    <option value="user">User</option>
                                </CFormSelect>
                            </CCol>
                            <CCol xs={12}>
                                <CButton color="primary" type="submit">
                                    Sign in
                                </CButton>
                            </CCol>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default Layout;
