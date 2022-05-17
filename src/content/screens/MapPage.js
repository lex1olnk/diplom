import React from 'react';
import Header from './header';
import MapContent from './MapContent';
import MenuBar from './MenuBar';
import LevelBar from './LevelBar';

const MapPage = () => {
  return (
    <div>
      <MenuBar/>
      <LevelBar/>
      <MapContent/>
    </div>
  );
}

export default MapPage;
