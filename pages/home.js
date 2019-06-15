import React from 'react'
import Link from 'next/link'

import BilingualBlock from '../components/BilingualBlock';

import FeyWindow from '../components/FeyWindow';
import Layout from '../components/Layout';
import FeyPoster from '../components/FeyPoster';
import Social from '../components/Social';
import Page from '../components/Page'

export default class Home extends Page {

  static slug = 'home'

  render() {
    const homepageContent = this.props.content[0].textblocks[0];
    return (
      <Layout { ...this.props }>
        <div className="container border-bottom">
          <div className="home-container__left border-right nobordermobile">
            <div className="pad border-bottom noborderdesk">
              <FeyWindow
                shape="oval"
                aspect="1.27"
                imageBuilder={ this.getImage('img-1') }
              />
            </div>
            <div className="">
              <FeyPoster />
            </div>
            <div className="border-top border-bottom flex">
              <BilingualBlock textblock={ homepageContent } fullw />
            </div>
            <div className="pad">
              <FeyWindow
                shape="oval"
                aspect="1.4"
                imageBuilder={ this.getImage('img-3') }
              />
            </div>
            <div className="border-top">
              <Social />
            </div>
          </div>
          <div className="home-container__right border-right nobordermobile">
            <div className="flex flex--column h-100">
              <div className="border-bottom rel">
                <FeyPoster />
              </div>
              <div className="border-bottom pad flex-1">
                <FeyWindow
                  shape="oval"
                  aspect="0.65"
                  imageBuilder={ this.getImage('img-2') }
                />
              </div>
              <div className="border-bottom pad">
                <div>
                  <h2 className="poster-text-2">
                    Château <br/>
                    du Feÿ,<br/>
                    Bourgogne
                  </h2>
                </div>
              </div>
              <div className="pad">
                <FeyWindow
                  shape="half-oval"
                  aspect="1"
                  imageBuilder={ this.getImage('img-4') }
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
