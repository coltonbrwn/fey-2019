import Link from 'next/link'

import Marquee from './Marquee';

const ticketsCopy = 'TICKETS EN VENTE LE 15 JUIN  —  TICKETS ON SALE JUNE 15  —  ';

const getTicketsText = props => {
  try {
    return props.marquees.find( item => item.title === 'Tickets' ).text
  } catch (e) {
    return;
  }
}

const Nav = props => (
  <div>
    <nav className="border-bottom">
      <div className="marquee border-bottom">
        <h4>
          <Marquee text={ getTicketsText(props) } />
        </h4>
      </div>
      <div className="nav-logo">
        <img src="/static/fey-logo.png" />
      </div>
    </nav>
  </div>
);

export default Nav;
