import React from 'react'
import Nav from './Nav'

export default function Footer(props) {
  return (
    <>
      <div>Footer and nav</div>
      <Nav links={props.links} />
      <h3> copyright 2013 Valet Industries, INC</h3>
    </>
  );
}