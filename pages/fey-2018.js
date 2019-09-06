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

const donorImagesQuery = `*[_type == "imagery" && title == "2018Logos"] {
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

  static slug = 'fey-2018'

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
    const title = this.props.content[0].title;
    const content = this.props.content[0].textblocks;
    const donorImages = this.props.donorImages[0];

    return (
      <Layout { ...this.props }>
        <div className="container border-bottom">
          <div className="one-third pad border-right">
            <h3>{ title }</h3>
          </div>
          <div className="flex-2" style={{background:"rgba(0,0,0,1)"}}>
          <iframe src="https://player.vimeo.com/video/333583411" style={{width:"100%",height:"60vh",border:"0px",padding:"5px 5px 5px 5px"}} allow="autoplay; fullscreen" allowfullScreen></iframe>
          </div>
        </div>
        <div className="container border-bottom">
          <div className="one-third pad border-right">
          </div>
          <div className="flex-2">
          <img src='../static/poster-min.png' style={{height:"auto",width:"100%"}}></img>
          </div>
        </div>


        <div className="container border-bottom">
          <div className="one-third pad border-right">
            <p className="bilingual-title">{ content[0].title_en }</p>
            <div className="bilingual-block">
              <BlockContent
                blocks={ content[0].body_en }
              />
            </div>
            <p className="bilingual-title">{ content[0].title_fr }</p>
            <div className="bilingual-block">
              <BlockContent
                blocks={ content[0].body_fr }
              />
            </div>
          </div>
          <div className="flex-2" style={{padding:"5px 5px 5px 5px"}}>
            <BlockContent
              blocks={ content[0].misc }
            />
          </div>
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

          </div>
        </div>

        <Social />
      </Layout>
    )
  }
}
