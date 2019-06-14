import React from 'react'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'

import BilingualBlock from '../components/BilingualBlock';
import FeyWindow from '../components/FeyWindow';
import Layout from '../components/Layout';
import Page from '../components/page'
import Social from '../components/social.js'

export default class Home extends Page {

  static slug = 'non-profit'

  render() {
    const title = this.props.content[0].title;
    const content = this.props.content[0].textblocks;
    const images = this.props.content[0].images;

    return (
      <Layout global={ this.props.global }>
        <div className="container border-bottom">
          <div className="pad">
            <h3>{ title }</h3>
          </div>
        </div>

        <div className="container border-bottom">
          <div className="one-third pad border-right"></div>
          <BilingualBlock textblock={ content[0] } />
        </div>

        <div className="container border-bottom">
          <div className="one-third pad border-right"></div>
          <BilingualBlock textblock={ content[1] } />
        </div>

        <div className="container border-bottom">
          <div className="one-third pad border-right">

          </div>
          <div className="pad">
            <p className="bilingual-title">
              PARTNERS / PARTENAIRES
            </p>
            {
              images.map( image => (
                <div className="donor-image">
                  <img src={ this.imageBuilder().image(image.image).url() } />
                </div>
              ))
            }
            <BlockContent
              blocks={ content[1].misc }
            />
          </div>
        </div>

        <Social />
      </Layout>
    )
  }
}
