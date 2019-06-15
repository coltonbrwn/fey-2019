import React from 'react'
import Link from 'next/link'

import BilingualBlock from '../components/BilingualBlock';
import FeyWindow from '../components/FeyWindow';
import Layout from '../components/Layout';
import Page from '../components/Page'
import Social from '../components/Social.js'

export default class Home extends Page {

  static slug = 'place'

  render() {
    const title = this.props.content[0].title;
    const content = this.props.content[0].textblocks;
    return (
      <Layout { ...this.props }>
        <div className="container border-bottom">
          <div className="one-third border-right pad">
            <h3>{ title }</h3>
          </div>
          <div className="flex-2 pad">
            <FeyWindow imageBuilder={ this.getImage('img-1') } />
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

        <Social />
      </Layout>
    )
  }
}
