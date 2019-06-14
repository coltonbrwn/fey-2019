import React from 'react';

const Sidebar = props => (
  <div className={`sidebar pad ${ props.isOpen && 'sidebar--open' }`}>
    <p><a href="/info">INFO</a></p>
    <p><a href="/info">INFO</a></p>
    <p><a href="/info">INFO</a></p>
    <p><a href="/info">INFO</a></p>
    <p><a href="/info">INFO</a></p>
    <p><a href="/info">INFO</a></p>
  </div>
)

export default Sidebar;
