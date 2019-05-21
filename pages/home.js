import React from 'react'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

import FeyWindow from '../components/FeyWindow';
import Layout from '../components/Layout';
import FeyTitle1 from '../components/svg/CdF_Title_1.svg'
import FeyTitle2 from '../components/svg/CdF_Title_2.svg'
import sanity from '../lib/sanity'
import sanityClient from '../lib/sanity'
import styles from './styles/home'

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
`

export default class Home extends React.Component {

  static async getInitialProps() {
    return {
      imagery: await sanity.fetch(imagesQuery),
      content: await sanity.fetch(contentQuery)
    }
  }

  getImage(tagName) {
    const img = this.props.imagery[0].images.find( img => tagName === img.tag );
    if (img) {
      return imageBuilder.image(img.image);
    }
  }

  render() {
    const homepageContent = this.props.content[0];
    return (
      <Layout>
        <div className="container border-bottom">
          <div className="home-container__left border-right">
            <div className="pad">
              <FeyWindow
                shape="oval"
                aspect="1.27"
                imageBuilder={ this.getImage('fey-backyard') }
              />
            </div>
            <div className="border-top border-bottom flex">
              <div className="pad border-right flex-1">
                <div className="home-text-inner">
                  <p>EN</p>
                  <BlockContent
                    blocks={ homepageContent.body_en }
                  />
                </div>
              </div>
              <div className="pad italic flex-1">
                <div className="home-text-inner">
                  <p>FR</p>
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
          </div>
          <div className="home-container__right">
            <div className="flex flex--column h-100">
              <div className="border-bottom pad">
                <FeyWindow
                  background="#e3aaec"
                  shape="ornamental"
                  aspect="1"
                >
                  <FeyTitle2 />
                </FeyWindow>
              </div>
              <div className="border-bottom pad flex-1">
                <FeyWindow
                  shape="oval"
                  aspect="0.65"
                  imageBuilder={ this.getImage('smokesignals') }
                />
              </div>
              <div className="border-bottom pad">
                <FeyWindow
                  shape="centered"
                  aspect="1"
                >
                  <FeyTitle1 />
                </FeyWindow>
              </div>
              <div className="pad flex-1">
                <FeyWindow
                  shape="half-oval"
                  aspect="1"
                  imageBuilder={ this.getImage('dancer') }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container marquee-2 lorg border-bottom">
          <span>Music Gastronomy Talks Performance Music Gastronomy Talks Performance Music Gastronomy Talks Performance Music Gastronomy Talks Performance Music Gastronomy Talks Performance Music Gastronomy Talks Performance</span>
        </div>
        <style jsx>{styles}</style>
      </Layout>
    )
  }
}
