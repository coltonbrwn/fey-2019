import React from 'react'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import Layout from '../components/Layout'
import sanity from '../lib/sanity'
import styles from './styles/movies'
import listStyles from './styles/list'
import sanityClient from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

const imageBuilder = imageUrlBuilder(sanityClient)

function imageUrlFor(source) {
  return imageBuilder.image(source)
}

const imagesQuery = `*[_type == "imagery" && title == "Homepage"] {
  _id,
  "imageUrls": images[].asset->url
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

  render() {
    const { imagery, content } = this.props;
    const homepageImages = imagery[0].imageUrls
    const homepageContent = content[0];

    console.log(homepageImages, homepageContent);

    return (
      <Layout>
        <div>
          {
            homepageImages.map( imgSrc => (
              <img src={imgSrc} key={imgSrc}/>
            ))
          }
        </div>
        <BlockContent
          blocks={homepageContent.body_en}
        />
        <style jsx>{styles}</style>
        <style jsx>{listStyles}</style>
      </Layout>
    )
  }
}
