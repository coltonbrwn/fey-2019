import React from 'react'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import Layout from '../components/Layout'
import sanity from '../lib/sanity'
import styles from './styles/home'
import sanityClient from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

const imageBuilder = imageUrlBuilder(sanityClient)

function imageUrlFor(source) {
  return imageBuilder.image(source)
}

const imagesQuery = `*[_type == "imagery" && title == "Homepage"] {
  _id,
  "images": images[]{
    tag,
    "imageUrl": image.asset->url
  }
}[0...1]
`;
const contentQuery = `*[_type == "bilingualText" && title == "Overview"] {
  _id,
  body_en,
  body_fr
}[0...1]
`

export default class Movies extends React.Component {

  static async getInitialProps() {
    return {
      imagery: await sanity.fetch(imagesQuery),
      content: await sanity.fetch(contentQuery)
    }
  }

  getImage(tagName) {
    const img = this.props.imagery[0].images.find( img => tagName === img.tag );
    return img ? img.imageUrl : null;
  }

  render() {
    const homepageContent = this.props.content[0];
    return (
      <Layout>
        <div className="home-container">
          <div className="home-container__left border-right">
            <div className="pad">
              <img src={ this.getImage('fey-backyard') } />
            </div>
            <div className="border-top border-bottom flex">
              <div className="pad border-right">
                <p>EN</p>
                <BlockContent
                  blocks={ homepageContent.body_en }
                />
              </div>
              <div className="pad italic">
                <p>FR</p>
                <BlockContent
                  blocks={ homepageContent.body_fr }
                />
              </div>
            </div>
            <div className="pad border-bottom">
              <img src={ this.getImage('fey-aerial') } />
            </div>
          </div>
          <div className="home-container__right">
            <div className="flex flex--column h-100">
              <div className="border-bottom pad flex-1">
                <img src={ this.getImage('pink-thing') } />
              </div>
              <div className="border-bottom pad flex-1">
                <img src={ this.getImage('smokesignals') } />
              </div>
              <div className="border-bottom pad flex-1 cdf-burgundy">
                <img src={ this.getImage('cdf-burgundy') } />
              </div>
              <div className="border-bottom pad flex-1">
                <img src={ this.getImage('dancer') } />
              </div>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </Layout>
    )
  }
}
