import React from 'react';

const svg = `
  <svg viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="2.70711" y1="1.29289" x2="38.7071" y2="37.2929" stroke="black" stroke-width="2"/>
    <line x1="1.29289" y1="37.2929" x2="37.2929" y2="1.29289" stroke="black" stroke-width="2"/>
  </svg>
`;

export default props => (
  <span {...props} dangerouslySetInnerHTML={{ __html: svg }} style={{ position: 'relative', top: '0.2em'}}/>
)
