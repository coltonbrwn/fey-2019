import React from 'react';
import Link from 'next/link'

const Sidebar = props => {
  return (
    <div className="sidebar pad border-left">
      {
        props.nav.map( navItem => (
          <h3 className="nav-item">
            <a href={ `/${ navItem.slug.current }` }>
              { navItem.title }
            </a>
          </h3>
        ))
      }
    </div>
  )
}

export default Sidebar;
