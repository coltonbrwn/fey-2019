import Link from 'next/link'

import Hamburg from './svg/ham';
import Marquee from './Marquee';

const ticketsLink = "https://www.weezevent.com/rencontre-fey-arts";

const getTicketsText = props => {
  try {
    return props.global.find( item => item.title === 'Tickets Marquee' ).text
  } catch (e) {
    console.log(e)
    return;
  }
}

const Nav = props => (
  <div>
    <nav className="border">
      <div className="marquee border-bottom">
        <h4>
          <a href={ ticketsLink } target="_blank">
            <Marquee text={ getTicketsText(props) } />
          </a>
        </h4>
      </div>
      <div className="nav-logo">
        <div className="nav-ham" onClick={ props.onHamClick }>
          <Hamburg />
        </div>
        <a href="/">
          <img src="/static/fey-logo.png" />
        </a>
      </div>
    </nav>
  </div>
);

export default Nav;
