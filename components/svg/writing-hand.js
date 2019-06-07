import React from 'react';

const svg = `
  <svg viewBox="0 0 104 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="WebAssets" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="ZapfDingbatsITC, Zapf Dingbats" font-size="131" font-weight="normal" letter-spacing="7.239463">
          <g id="Artboard" transform="translate(-1391.000000, -660.000000)" fill="#000000">
              <text id="✍︎">
                  <tspan x="1388.37905" y="742">✍︎</tspan>
              </text>
          </g>
      </g>
  </svg>
`;

export default props => (
  <span dangerouslySetInnerHTML={{ __html: svg }} />
)
