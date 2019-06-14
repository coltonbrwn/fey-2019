import React from 'react';

const svg = `
  <svg viewBox="0 0 52 35" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line y1="1" x2="52" y2="1" stroke="black" stroke-width="2"/>
  <line y1="17" x2="52" y2="17" stroke="black" stroke-width="2"/>
  <line y1="34" x2="52" y2="34" stroke="black" stroke-width="2"/>
  </svg>
`;

export default props => (
  <span dangerouslySetInnerHTML={{ __html: svg }} style={{ position: 'relative', top: '0.2em'}}/>
)
