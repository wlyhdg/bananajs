import React from 'react'
import { Canvas } from 'react-three-fiber'
import Box from './Box'

export default function ThreeMain() {
  return(
    <Canvas id="canvas">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-3, 0, 0]} />
      <Box position={[3, 0, 0]} />
    </Canvas>
  )
}