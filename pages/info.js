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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11417.862496221489!2d3.3306801000000115!3d48.0142881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfad62ced3cee2e56!2zQ2hhzIJ0ZWF1IGR1IEZlecyI!5e1!3m2!1sen!2sde!4v1567281069750!5m2!1sen!2sde" style={{width:"100%",height:"70vh",border:"0px"}}></iframe>
          </div>
        </div>

        <div className="container border-bottom">
          <div className="one-third pad border-right">
          <iframe src="//www.blablacar.com/widget/FR_WIDGET_PSGR?from=Paris&to=Villecien" style={{border:0,height:"270px",width:"100%"}} frameborder="0" scrolling="no"></ iframe>
          </div>
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
