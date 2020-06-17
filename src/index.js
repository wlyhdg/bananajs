import React from 'react';
import ReactDOM from 'react-dom';
import './styles/colors.scss'
import './styles/index.scss'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Canvas, useFrame } from 'react-three-fiber';
import Box from '../src/components/Three/Three'

ReactDOM.render(
  <React.StrictMode>
    <Canvas id="canvas">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
    <App />
  </React.StrictMode>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
