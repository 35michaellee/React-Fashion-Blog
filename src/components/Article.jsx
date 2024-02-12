import React from 'react';

export default function Article(props) {
  return (
    <>
    <article id={props.id}>
      <h2 id={props.title}>{props.title}</h2>
      <img src={props.imagesrc} alt={props.alt} />
      <p>{props.text}</p>
      <a className="continues">Continues</a>
      <p className='pagebreak'></p>
    </article>
    </>
  );
}