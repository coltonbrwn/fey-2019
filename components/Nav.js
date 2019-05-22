import Link from 'next/link'

import Marquee from './Marquee';
import styles from './styles/nav'

const Nav = props => (
  <div>
    <div className="nav-logo-dummy">
      <img src="/static/fey-logo.png" />
    </div>
    <nav className="border-bottom">
      <div className="marquee border-bottom">
        <Marquee
          text="Tickets Billets"
        />
      </div>
      <div className="nav-logo">
        <img src="/static/fey-logo.png" />
      </div>
      <style jsx global>{ styles }</style>
    </nav>
  </div>
);

export default Nav;
