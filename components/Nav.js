import Link from 'next/link'

import Marquee from './Marquee';

const ticketsCopy = 'TICKETS EN VENTE LE 15 JUIN  —  TICKETS ON SALE JUNE 15  —  ';

const Nav = props => (
  <div>
    <div className="nav-logo-dummy">
      <img src="/static/fey-logo.png" />
    </div>
    <nav className="border-bottom">
      <div className="marquee border-bottom">
        <Marquee text={ ticketsCopy } />
      </div>
      <div className="nav-logo">
        <img src="/static/fey-logo.png" />
      </div>
    </nav>
  </div>
);

export default Nav;
