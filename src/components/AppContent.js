import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CContainer, CSpinner } from '@coreui/react';
import routes from '../routes';


const isAuthenticated = !!localStorage.getItem('userData');

const AppContent = () => {
  return (
    <CContainer className="px-4" lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
          {isAuthenticated || routes.some(route => route.name === 'userListing') ? (
            <Route path="/" element={<Navigate to="/" replace />} />
          ) : (
            <Route path="/" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
