import React from 'react'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

import FeyWindow from '../components/FeyWindow';
import Layout from '../components/Layout';
import FeyPoster from '../components/FeyPoster';
import FeyTitle1 from '../components/svg/CdF_Title_1'
import FeyTitle2 from '../components/svg/CdF_Title_2'
import Marquee from '../components/Marquee';
import sanity from '../lib/sanity'
import sanityClient from '../lib/sanity'
import WritingHand from '../components/svg/writing-hand'

const newsletterLink = 'https://us19.campaign-archive.com/home/?u=b1b6b4c1970d5e0d255d664b4&id=3d70d4b976';
const sociaLink = 'https://www.instagram.com/fey_arts_/';
const imageBuilder = imageUrlBuilder(sanityClient)

const imagesQuery = `*[_type == "imagery" && title == "Homepage"] {
  _id,
  images
}[0...1]
`;
const contentQuery = `*[_type == "bilingualText" && title == "Overview"] {
  _id,
  body_en,
  body_fr
}[0...1]
`;
const marqueeQuery = `*[_type == "marquees"] {
  _id,
  text,
  title
}
`;

export default class Home extends React.Component {

  static async getInitialProps() {
    return {
      imagery: await sanity.fetch(imagesQuery),
      content: await sanity.fetch(contentQuery),
      marquees: await sanity.fetch(marqueeQuery)
    }
  }

  getImage(tagName) {
    try {
      const img = this.props.imagery[0].images.find( img => tagName === img.tag );
      return imageBuilder.image(img.image);
    } catch (e) {
      return;
    }
  }

  getMarqueeText() {
    try {
      return this.props.marquees.find( item => item.title === 'Disciplines' ).text;
    } catch (e) {
      return;
    }
  }

  render() {
    const homepageContent = this.props.content[0];
    return (
      <Layout marquees={ this.props.marquees }>
        <div className="container border-bottom">
          <div className="home-container__left border-right">
            <div className="pad">
              <FeyWindow
                shape="oval"
                aspect="1.27"
                imageBuilder={ this.getImage('fey-backyard') }
              />
            </div>
            <div className="">
              <FeyPoster />
            </div>
            <div className="border-top border-bottom flex">
              <div className="pad border-right flex-1">
                <div className="home-text-inner">
                  <BlockContent
                    blocks={ homepageContent.body_en }
                  />
                </div>
              </div>
              <div className="pad italic flex-1">
                <div className="home-text-inner">
                  <BlockContent
                    blocks={ homepageContent.body_fr }
                  />
                </div>
              </div>
            </div>
            <div className="pad">
              <FeyWindow
                shape="oval"
                aspect="1.4"
                imageBuilder={ this.getImage('fey-aerial') }
              />
            </div>
            <div className="flex border-top">
              <div className="border-right flex-1 text-center">
                <div className="pad">
                  <h4>
                    <a href={ newsletterLink } target="_blank">
                      Subscribe <WritingHand />
                    </a>
                  </h4>
                </div>
              </div>
              <div className="flex-1 text-center">
                <div className="pad">
                  <h4>
                    <a href={ sociaLink } target="_blank">
                      @fey_arts_
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container__right">
            <div className="flex flex--column h-100">
              <div className="border-bottom flex-1 rel">
                <FeyPoster />
              </div>
              <div className="border-bottom pad flex-1">
                <FeyWindow
                  shape="oval"
                  aspect="0.65"
                  imageBuilder={ this.getImage('smokesignals') }
                />
              </div>
              <div className="border-bottom pad">
                <div>
                  <h2 className="poster-text-2">
                    Château <br/>
                    du Feÿ,<br/>
                    Bourgogne
                  </h2>
                </div>
              </div>
              <div className="pad">
                <FeyWindow
                  shape="half-oval"
                  aspect="1"
                  imageBuilder={ this.getImage('dancer') }
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
