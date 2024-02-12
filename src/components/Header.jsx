
import React from 'react';
import Nav from './Nav'; 

export default function Header(props) {
  return (
    <>
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <Nav {...props} /> 
    </>
  );
}