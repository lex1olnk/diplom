import React, { useEffect, useState } from 'react';
import {
  MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap
} from 'react-leaflet';
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css';
import { useWindowDimensions } from '../consts/functions';
import { useSelector } from 'react-redux';

const skater = new Icon({
  iconUrl: '../images/icons/marker.png',
  iconSize: [25, 25]
});

const styles = {
  departments: {
    weight: 1,
    fill_color: '#ffffff',
    fill_opacity: 1,
    opacity: 1,
  },
  result: {
    fillColor: 'green',
    fillColor: '#fff',
    weight: 1,
    opacity: 1
  }
};

// Вызов функции при приближении или отдалении карты
const GetZoomValue = () => {
  const map = useMap();
  map.on('zoomend', function() {
    console.log(map.getZoom())
  });

  return '';
}

const onEachFeature = (feature, layer) => {
  const popupContent = feature.properties.name;
  layer.bindPopup(popupContent);
  layer.on({
    click: layer.openPopup(),

    mouseout: e => {
      layer.closePopup();
    }
  });
}

const clickToFeature = (e) => {
  const layer = e.target;
}

const data = places => {
  return (
    <div>
      {places.map(item => {
        return <GeoJSON key={item.name} data={item.features} style={item.style} onEachFeature={onEachFeature}/>
      })}
    </div>);
};

const MapSimple = props => {
  const [map, setmap] = useState(null);
  const data2 = useSelector((state) => state.data.value);
  const sizes = useWindowDimensions();

  const searchResult = () => {
    if (data2 !== null) {
      if (map) { 
        map.flyTo({
          lat: data2.geometry.coordinates[0][0][1],
          lng: data2.geometry.coordinates[0][0][0]
        })
      }
      return <GeoJSON data={[data2]} style={styles.result}/>
    }
  }

  return (
    <MapContainer
      style={{
        height: sizes.height,
        backgroundColor: 'white',
        zIndex: 1,
      }}
      center={props.data.center}
      zoom={18}
      minZoom={16}
      maxZoom={21}
      whenCreated={setmap}
    >
      <TileLayer
        attribution='copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}@2x.png?key=e65VFhNaAEo0l5tGguVF"
      />
       {searchResult()}
       <Marker
        position={props.data.center}
        icon={ skater }
      >
      </Marker>
      <GetZoomValue/>
    </MapContainer>
  );
}

export default MapSimple;
