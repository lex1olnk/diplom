import React from 'react';
import Header from './header';
import MapContent from './MapContent';
import MenuBar from './MenuBar';
import LevelBar from './LevelBar';
import { auth } from '../store/tasks'

const MapPage = () => {
  const [clicked, setClicked] = React.useState(false)
  return (
    <div>
      <div onClick={() => { setClicked(!clicked) }}>
        <MenuBar/>
      </div>
      <div onClick={() => { setClicked(!clicked) }}>
        <LevelBar />
      </div>
      <MapContent/>
    </div>
  );
}

export default MapPage;
