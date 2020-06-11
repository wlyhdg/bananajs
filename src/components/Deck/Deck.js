import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import './Deck.scss';
import {StaticMap} from 'react-map-gl'

const MAPBOX_ACCESS_TOKEN='blah'

const initialViewState = {
  longitude: -134,
  latitude: 34,
  zoom:12,
  patch: 0,
  bearing: 0
};

const data = [{sourcePosition: [-134,34]}, {targetPosition: [-134,34]}];

export default function Deck () {
  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];

  return (
    <div className='deck__view'>
      <DeckGL initialViewState={initialViewState} controller={true} layers={layers}>
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    </div>
  );
}