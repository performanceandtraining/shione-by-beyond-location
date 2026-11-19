import * as Leaflet from 'leaflet';
import {maplibreGL} from './vendor/leaflet-maplibre-gl.mjs';
import {setWorkerUrl} from 'maplibre-gl';
setWorkerUrl(new URL('./vendor/maplibre-gl-worker.mjs', import.meta.url).href);
window.L={...Leaflet,maplibreGL};
await import('./course.js');
