import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './Components/Routes/RoutesList';

function Routes() {
  return (
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
  );
}

export default Routes;
