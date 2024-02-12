import React from 'react';

export default function Nav(props) {
  const { links } = props; // Destructure the links array from props

  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}