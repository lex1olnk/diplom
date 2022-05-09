import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Main from '../screens/Main';
import MapPage from '../screens/MapPage';
import FaqPage from '../screens/FaqPage';

const NavRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/Map" element={<MapPage />} />
        <Route exact path="/Faq" element={<FaqPage />} />
      </Routes>
    </Router>
  );
}

export default NavRoutes;
