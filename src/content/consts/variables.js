import background from '../images/bg2-2.png';
import pixelImg from '../images/pixelimg.png';
import svfu from '../geojson/svfu.json'
import guk from '../geojson/guk.json'
import departments from '../geojson/deparments.json'
import ks from '../geojson/ks.json'
import floorfourth from '../geojson/4floor.json'
import qq from '../geojson/4floor_cabs4.json'

export { pixelImg };
export const bg = background;

export const key = 'AIzaSyC3xUnuzP1RN_XKqaGPMRvz3BWBV7zR_nk';

export const center = {
  lat: 62.01671935259849,
  lng: 129.704032757926,
};
export const markerpos = {
  lat: 62.01648597850309,
  lng: 129.70535251493942,
};

export const places = [
  floorfourth, svfu, guk, departments, ks
]
