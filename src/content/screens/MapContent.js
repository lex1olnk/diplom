import React, { useEffect, useState } from 'react';
import MapSimple from './MapSimple';
import { center, markerpos, places, floors } from '../consts/variables';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';

const MapContent = () => {
  return (
    <div>
      <MapSimple data={{
        center,
        marker: markerpos,
        places: places,
        floors: floors,
      }}
      />
    </div>
  );
}

export default MapContent;
