import Link from 'next/link'

import Marquee from './Marquee';

const getTicketsText = props => {
  console.log(props);
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
