import React, { useEffect, useState } from 'react';
import MapSimple from './MapSimple';
import { center, markerpos, places, rooms } from '../consts/variables';

const MapContent = () => {
  return (
    <div>
      <MapSimple data={{
        center,
        marker: markerpos,
        places: places,
        rooms: rooms
      }}
      />
    </div>
  );
}

export default MapContent;
