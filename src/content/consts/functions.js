import React, { useEffect, useState } from 'react';
import { places, rooms } from './variables'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export const search = (item, mode) => {
  const result = []
  if (item.length > 0) {
    if (mode) {
      places.map(buildings => {
        buildings.features.map(place => {
          const x = place
          if (x.properties.name !== undefined) {
            if (x.properties.name.includes(item)) {
              result.push(x)
              console.log(x, 'got')
            }
          }
          /// console.log(x)
        })
      })
    } else {
      for (var x in rooms) {
        console.log(rooms[x])
        rooms[x].map(buildings => {
          buildings.features.map(place => {
            const x = place
            console.log(x)
            if (x.properties.number !== undefined) {
              if (x.properties.number.includes(item)) {
                result.push(x)
                console.log(x, 'got')
              }
            }
            /// console.log(x)
          })
        })
      }
    }
  }
  return result
}

export const GetHeaderHeight = () => {
  const [height, setHeight] = useState('');
  React.useEffect(() => {
    const x = document.getElementById('header');
    setHeight(x.offsetHeight);
  });
  return height;
};

export const Line = (height) => {
  return <div style={{ width: '100%', height: height, background: 'white', margin: '40px auto', borderRadius: '2px' }}></div>
}
