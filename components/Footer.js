import Link from 'next/link'

import FeyWindow from './FeyWindow'
import WritingHand from './svg/writing-hand'

const newsletterLink = 'https://us19.campaign-archive.com/home/?u=b1b6b4c1970d5e0d255d664b4&id=3d70d4b976';
const sociaLink = 'https://www.instagram.com/fey_arts_/';

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
              <a href={ newsletterLink } target="_blank">
                Subscribe <WritingHand />
              </a>
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
              <a href={ sociaLink } target="_blank">
                @fey_arts_
              </a>
            </div>
          </FeyWindow>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
