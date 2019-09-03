import React from 'react';

import WritingHand from './svg/writing-hand'
import IG from './svg/ig'

const newsletterLink = 'https://us19.campaign-archive.com/home/?u=b1b6b4c1970d5e0d255d664b4&id=3d70d4b976';
const sociaLink = 'https://www.instagram.com/fey_arts_/';

import Link from 'next/link'

const Footer = props => (
  <footer>
    <div className="flex fey-contact">
      <div className="border-right flex-1 text-center">
        <div className="pad">
          <h4>
            <WritingHand />
            <a href={ newsletterLink } target="_blank">
              Subscribe
            </a>
          </h4>
        </div>
      </div>
      <div className="flex-1 text-center">
        <div className="pad">
          <h4>
            <IG />
            <a href={ sociaLink } target="_blank">
              fey_arts_
            </a>
          </h4>
        </div>
      </div>
    </div>
    <div id="copyright-footer"><p>Copyright 2019 © Feÿ</p></div>
  </footer>
);

export default Footer;
