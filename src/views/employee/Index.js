import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CIcon from '@coreui/icons-react'
import { cilBell } from '@coreui/icons'
import UserButton from '../../components/UserButton';
import {
    CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Tables = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://taskholding.chullspace.com/api/user/user'); // Replace with your API endpoint
          setData(response.data.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Employees Table</strong> <small></small>
          </CCardHeader>
          <CCardBody>
        
             
              
             
        
            <p className="text-body-secondary small">

            </p>
              <CTable >
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Position</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                {data.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>{item.first_name}</CTableDataCell>
                    <CTableDataCell>{item.email}</CTableDataCell>
                    <CTableDataCell>{item.position}</CTableDataCell>
                  </CTableRow>
                ))}
                </CTableBody>
              </CTable>
            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
