import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import {
  MapContainer, TileLayer, GeoJSON, Marker, useMap, Popup
} from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import { useWindowDimensions } from '../consts/functions';
import { useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';

const skater = new L.Icon({
  iconUrl: require('../images/icons/marker.png'),
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
    color: '#fff',
    weight: 2,
    opacity: 1
  }
};

// Вызов функции при приближении или отдалении карты
const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
    });
  }, [map]);

  return position === null 
    ? null 
    : (
        <Marker position={position} icon={skater}>
          <Popup>
            You are here. <br />
            Map bbox: <br />
          </Popup>
        </Marker>
      );
}

const onEachFeature = (feature, layer) => {
  layer.bindPopup('<h5>' + feature.properties.name + '</h5> <p>' + feature.properties.number + '</p> <p>' + feature.properties.EntityHandle + '</p> ');
  layer.on({
    click: layer.openPopup(),

    mouseout: e => {
      layer.closePopup();
    }
  });
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
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(19);
  const data2 = useSelector((state) => state.data.value);
  const sizes = useWindowDimensions();

  console.log(props.data.rooms)

  const GetZoomValue = () => {
    if (map !== null) {
      map.on('zoomend', function() {
        setZoom(map.getZoom())
      });  
    }
  }

  const searchResult = () => {
    if (data2 !== null) {
      if (map) { 
        map.flyTo({
          lat: data2.geometry.coordinates[0][0][1],
          lng: data2.geometry.coordinates[0][0][0]
        })
      }
      return <GeoJSON data={[data2]} key={data2.properties.number} style={styles.result} onEachFeature={onEachFeature}/>
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
      zoom={19}
      minZoom={16}
      maxZoom={21}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}@2x.png?key=e65VFhNaAEo0l5tGguVF"
      />
      {searchResult()}
      {GetZoomValue()}
      {data(props.data.places)}
      {zoom > 17 ? data([props.data.rooms.kfen[0]]) : ''}
      <Marker
        position={props.data.center}
        icon={ skater }
      >
        <Popup>
          Center of the map
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapSimple;
