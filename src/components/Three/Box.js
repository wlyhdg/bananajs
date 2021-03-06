import React, {useRef, useState} from 'react';
import { extend, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import './Box.scss'

extend({ OrbitControls })

export default function Box(props) {
  // this reference will give us direct access to the mesh
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const { camera, gl: { domElement } } = useThree()

  // Rotate mesh every frame, this is outside React without overhead
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return(
    <>
      <mesh
        {...props}
        ref={mesh}
        scale={active ? [1.5,1.5,1.5]: [1,1,1]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <boxBufferGeometry attach="geometry" args={[1,1,1]} />
        <meshStandardMaterial attach="material" color={hovered ? 'orange' : '#835C3B'} />
      </mesh>
      <orbitControls args={[camera, domElement]} />
    </>
  );
}
