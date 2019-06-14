import React from 'react'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

import sanity from '../lib/sanity'
import sanityClient from '../lib/sanity'
const imageBuilder = imageUrlBuilder(sanityClient)

const contentQuery = slug => `*[_type == "pages" && slug.current == "${ slug }"] {
  _id,
  title,
  textblocks,
  images
}[0...1]
`;
const globalQuery = `*[_type == "global"] {
  _id,
  text,
  title
}
`;

export default class Home extends React.Component {

  static async getInitialProps() {
    return {
      content: await sanity.fetch(contentQuery(this.slug)),
      global: await sanity.fetch(globalQuery)
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

  render() {
    return <div />
  }
}
