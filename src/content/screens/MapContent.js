import React, { useEffect, useState } from 'react';
import MapSimple from './MapSimple';
import { center, markerpos, places } from '../consts/variables';

const MapContent = () => {
  const items = {}
  /*
  departments.features.forEach(element => {
    items.features.push(element)
  });
  guk.features.forEach(element => {
    items.features.push(element)
  });
  */
  return (
    <div>
      <MapSimple data={{
        center,
        marker: markerpos,
        items: items.features,
        places: places
      }}
      />
    </div>
  );
}

export default MapContent;
