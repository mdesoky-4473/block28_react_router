import React from 'react';
import koalaImg from '../assets/koala.jpg'; 

export default function Koala() {
  return (
    <div className="Koala">
      <h1>Koala</h1>
      <img src={koalaImg} alt="Cute Koala" />
    </div>
  );
}
