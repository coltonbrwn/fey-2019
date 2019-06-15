import React from 'react';
import BlockContent from '@sanity/block-content-to-react'

export default class BilingualBlock extends React.Component {

  render() {
    try {
      return (
        <React.Fragment>
          <div className={`pad border-right ${ !this.props.fullw && 'one-third' }`}>
            <p className="bilingual-title">{ this.props.textblock.title_en }</p>
            <div className={`bilingual-block ${ this.props.noindent && 'noindent' }`}>
              <BlockContent
                blocks={ this.props.textblock.body_en[0] }
              />
            </div>
          </div>
          <div className={`pad border-right ${ !this.props.fullw ? 'one-third' : 'noborderdesk nobordermobile' }`}>
            <p className="bilingual-title">{ this.props.textblock.title_fr }</p>
            <div className={`bilingual-block ${ this.props.noindent && 'noindent' }`}>
              <BlockContent
                blocks={ this.props.textblock.body_fr[0] }
              />
            </div>
          </div>
        </React.Fragment>
      )
    } catch (e) {
      return (
        <div> Render Error </div>
      )
    }
  }

}
