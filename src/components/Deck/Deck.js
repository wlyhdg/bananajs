import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import './Deck.scss';
import {StaticMap} from 'react-map-gl';
import {MapView, FirstPersonView} from '@deck.gl/core';

const MAPBOX_ACCESS_TOKEN=process.env.REACT_APP_MAPBOX_TOKEN;

const initialViewState = {
  latitude: 37.3382,
  longitude: -121.8863,
  zoom:12,
  patch: 0,
  bearing: 0
};

const data = [{sourcePosition: [37.3382, -121.8863]}, {targetPosition: [37.3382, -121.8933]}];

export default function Deck () {
  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];

  return (
    <div className='deck__view'>
      <DeckGL initialViewState={initialViewState} controller={true} layers={layers}>
        <MapView id="map" width="50%" controller={true}>
          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </MapView>
        {/* <FirstPersonView width="50%" x="50%" fovy={50} /> */}
      </DeckGL>
    </div>
  );
}