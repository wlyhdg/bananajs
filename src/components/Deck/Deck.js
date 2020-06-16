import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer, ScatterplotLayer} from '@deck.gl/layers';
import './Deck.scss';
import {StaticMap} from 'react-map-gl';
import {MapView} from '@deck.gl/core';

const MAPBOX_ACCESS_TOKEN=process.env.REACT_APP_MAPBOX_TOKEN;

const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

const data = [{sourcePosition: [-122.41669, 37.7853], targetPosition: [-121.8863, 37.3382]}];

const layer = new ScatterplotLayer({
  id: 'bart-stations',
  data: [
    {name: 'Colma', passengers: 4214, coordinates: [-122.466233, 37.684638]},
    {name: 'Civic Center', passengers: 24798, coordinates: [-122.413756,37.779528]}
  ],
  stroked: false,
  filled: true,
  getPosition: d => d.coordinates,
  getRadius: d => Math.sqrt(d.passengers),
  getFillColor: [255, 200, 0]
});

export default function Deck () {
  const layers = [
    layer,
    new LineLayer({id: 'line-layer', data}),
    // new ScatterplotLayer({data})
  ];

  return (
    <div className='deck__view'>
      <DeckGL 
        initialViewState={initialViewState} 
        controller={true} 
        layers={layers}
      >
        <MapView id="map"  controller={true}>
          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </MapView>
        {/* <FirstPersonView width="50%" x="50%" fovy={50} /> */}
      </DeckGL>
    </div>
  );
}