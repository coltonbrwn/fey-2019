import React from 'react'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'

import BilingualBlock from '../components/BilingualBlock';
import FeyWindow from '../components/FeyWindow';
import Layout from '../components/Layout';
import Page from '../components/page'
import Social from '../components/social.js'

export default class Home extends Page {

  static slug = 'about'

  render() {
    const title = this.props.content[0].title;
    const content = this.props.content[0].textblocks;
    return (
      <Layout global={ this.props.global }>
        <div className="container border-bottom">
          <div className="flex-2 pad">
            <h3>{ title }</h3>
          </div>
          <div className="one-third border-left"></div>
        </div>

        <div className="container border-bottom">
          <BilingualBlock textblock={ content[0] } />
          <div className="one-third pad">
            <FeyWindow imageBuilder={ this.getImage('img-1') } />
          </div>
        </div>

        <div className="container border-bottom">
          <div className="one-third pad border-right">
            <FeyWindow imageBuilder={ this.getImage('img-2') } />
          </div>
          <BilingualBlock textblock={ content[1] } />
        </div>

        <div className="container border-bottom">
          <BilingualBlock textblock={ content[2] } />
          <div className="one-third pad">
            <FeyWindow imageBuilder={ this.getImage('img-3') } />
          </div>
        </div>

        <Social />
      </Layout>
    )
  }
}
