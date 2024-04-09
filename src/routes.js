
import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Login = React.lazy(() => import('./views/Login'));
const Users = React.lazy(() => import('./views/users/Index'));
const UserForm = React.lazy(() => import('./views/users/Form'));
const UserEditForm = React.lazy(() => import('./views/users/EditForm'));
const Hr = React.lazy(() => import('./views/hr/Index'));
const Employee = React.lazy(() => import('./views/employee/Index'));

const routes = [
  // { path: '/', exact: true, name: 'Home' },
  { path: '/login', name: 'Login', element: Login },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/users', name: 'Users', element: Users },
  { path: '/userForm', name: 'UserForm', element: UserForm },
  { path: '/userEditForm/:id', name: 'UserEditForm', element: UserEditForm },
  { path: '/hr', name: 'Hr', element: Hr },
  { path: '/employee', name: 'Employee', element: Employee },
];

export default routes;
