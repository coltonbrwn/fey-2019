import React from 'react'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

import BilingualBlock from '../components/BilingualBlock';
import FeyWindow from '../components/FeyWindow';
import Layout from '../components/Layout';
import Page from '../components/Page'
import Social from '../components/Social.js'

import sanity from '../lib/sanity'
import sanityClient from '../lib/sanity'
const imageBuilder = imageUrlBuilder(sanityClient)

const donorImagesQuery = `*[_type == "imagery" && title == "Logo"] {
  _id,
  images
}[0...1]`;
const contentQuery = slug => `*[_type == "pages" && slug.current == "${ slug }"] {
  _id,
  title,
  textblocks,
  images
}[0...1]`;
const globalQuery = `*[_type == "global"] {
  _id,
  text,
  title
}`;
const navQuery = `*[_type == "pages"] {
  _id,
  title,
  slug
}`;

export default class Org extends React.Component {

  static slug = 'org'

  static async getInitialProps() {
    return {
      content: await sanity.fetch(contentQuery(this.slug)),
      global: await sanity.fetch(globalQuery),
      nav: await sanity.fetch(navQuery),
      donorImages: await sanityClient.fetch(donorImagesQuery)
    }
  }

  getImage(tagName) {
    try {
      const img = this.props.content[0].images.find( img => tagName === img.tag );
      return imageBuilder.image(img.image);
    } catch (e) {
      return;
    }
  }

  imageBuilder() {
    return imageBuilder;
  }

  render() {
    console.log(this.props);
    const title = this.props.content[0].title;
    const content = this.props.content[0].textblocks;
    const donorImages = this.props.donorImages[0];

    return (
      <Layout { ...this.props }>
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
          <div className="pad flex-1">
            <p className="bilingual-title">
              PARTNERS / PARTENAIRES
            </p>
            <div className="donor-images">
              {
                donorImages.images.map( image => (
                  <div className="donor-image">
                    <img src={ this.imageBuilder().image(image.image).size(500).url() } />
                  </div>
                ))
              }
            </div>
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
