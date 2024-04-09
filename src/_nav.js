import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
const userData = JSON.parse(localStorage.getItem('userData'));
const _nav = [


]
const condition = true; // Change this condition as needed

if ( userData && userData.role === 'systemAdmin') {
  _nav.push({
    component: CNavItem,
    name: 'User Account',
    to: '/users',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,

  },
    {
      component: CNavItem,
      name: 'Human Resource',
      to: '/hr',
    },
    {
      component: CNavItem,
      name: 'Employee Profile',
      to: '/employee',
    }
  );
} else if (userData && userData.role === 'HR') {
  _nav.push(
    {
      component: CNavItem,
      name: 'Human Resource',
      to: '/hr',
    },
    
  );
} else if (userData && userData.role === 'user') {
  _nav.push(
    {
      component: CNavItem,
      name: 'Employee Profile',
      to: '/employee',
    });
}
export default _nav
