import Link from 'next/link'

import styles from './styles/nav'
import FeyWindow from './FeyWindow'
import WritingHand from './svg/writing-hand'

const Footer = props => (
  <footer>
    <div className="container">
      <div className="flex-1 border-right">
        <div className="pad">
          <FeyWindow
            background="#e3aaec"
            shape="ornamental"
          >
            <div className="lorg">
              Email <WritingHand />
            </div>
          </FeyWindow>
        </div>
      </div>
      <div className="flex-1">
        <div className="pad">
          <FeyWindow
            background="#54a463"
            shape="oval"
          >
            <div className="lorg">
              @fey_arts_
            </div>
          </FeyWindow>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
