import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

import BilingualBlock from '../components/BilingualBlock';
import FeyWindow from '../components/FeyWindow';
import Layout from '../components/Layout';
import Page from '../components/Page'
import Social from '../components/Social.js'

export default class Home extends Page {

  static slug = 'info'

  render() {
    const title = this.props.content[0].title;
    const content = this.props.content[0].textblocks;
    return (
      <Layout { ...this.props }>
        <div className="container border-bottom">
          <div className="one-third pad">
            <h3>{ title }</h3>
          </div>
          <div className="flex-2 border-left pad">
            <FeyWindow imageBuilder={ this.getImage('img-1') } />
          </div>
        </div>

        <div className="container border-bottom">
          <div className="one-third pad border-right"></div>
          <BilingualBlock textblock={ content[0] }  noindent />
        </div>

        <div className="container border-bottom">
          <BilingualBlock textblock={ content[1] } noindent />
          <div className="pad">
            <BlockContent
              blocks={ content[1].misc }
            />
          </div>
        </div>

        {
          content[2] && (
            <div className="container border-bottom">
              <div className="one-third pad border-right"></div>
              <BilingualBlock textblock={ content[2] }  noindent />
            </div>
          )
        }

        <Social />
      </Layout>
    )
  }
}
