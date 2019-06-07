import React from 'react';

import FeyPoster from './svg/fey-poster.js';

export default props => (
  <div className="fey-poster">
    <div className="flex-1 pad border-top">
      <FeyPoster />
    </div>
    <div className="poster-text-container flex-1 pad border-top border-left">
      <h3 className="poster-text">
        <span>Art</span><br/>
        <span>Music</span><br/>
        <span>Cinema</span><br/>
        <span>Gastronomy</span><br/>
        <span>Performance</span><br/>
        <span>Architecture</span><br/>
        <span>Publishing</span><br/>
        <span>Talks</span><br/>
      </h3>
    </div>
  </div>
)
