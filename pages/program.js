import React from 'react'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'

import BilingualBlock from '../components/BilingualBlock';
import FeyWindow from '../components/FeyWindow';
import Layout from '../components/Layout';
import Page from '../components/page'
import Social from '../components/social.js'

export default class Home extends Page {

  static slug = 'program'

  render() {
    const title = this.props.content[0].title;
    const content = this.props.content[0].textblocks;
    return (
      <Layout global={ this.props.global }>
        <div className="container border-bottom">
          <div className="pad">
            <h3>{ title }</h3>
          </div>
        </div>

        {
          content.map( item => (
            <div className="container border-bottom">
              <div className="one-third pad border-right">
                <p className="bilingual-title">{ item.title_en }</p>
                <div className="bilingual-block">
                  <BlockContent
                    blocks={ item.body_en }
                  />
                </div>
                <p className="bilingual-title">{ item.title_fr }</p>
                <div className="bilingual-block">
                  <BlockContent
                    blocks={ item.body_fr }
                  />
                </div>
              </div>
              <div className="pad">
                <BlockContent
                  blocks={ item.misc }
                />
              </div>
            </div>
          ))
        }

        <Social />
      </Layout>
    )
  }
}
