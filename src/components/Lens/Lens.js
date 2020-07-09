import React, { useState } from 'react';
import './Lens.scss'

export default function Lens() {
  const [zoomClick, setZoom] = useState(false);

  function zoomControl() {
    setZoom(!zoomClick);
  }

  return (
    <>
      <p>You are now in the matrix</p>
      <div onClick={() => zoomControl()} className={`lens ${zoomClick? "zoom" : ''}`}>
      </div>
    </>
  )
}