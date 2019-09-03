import React from 'react';
import Link from 'next/link'


const weights = {
  'home': 0,
  'about': 1,
  'program': 2,
  'info': 3,
  'place': 4,
  'org': 5,
  'fey-2018': 6
}

// => (
// a.slug.current === 'home' ? -1 : 1
// )
const Sidebar = props => {
  return (
    <div className="sidebar pad border-left">
      {
        props.nav.sort(function(a, b) {return weights[a.slug.current]-weights[b.slug.current]}
          ).map( (navItem) =>
          <h3 className="nav-item">
            <a href={ `/${ navItem.slug.current }` }>
              { navItem.title }
            </a>
          </h3>
        )

      }

    </div>
  )
}

export default Sidebar;
