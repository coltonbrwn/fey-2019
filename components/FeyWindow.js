import React from 'react';


export default class FeyWindow extends React.Component {

  constructor( props ) {
    super();
    this.state = {
      elementWidth: 1200
    }
  }

  getImageUrl() {
    const { aspect, imageBuilder } = this.props;
    if (!imageBuilder) {
      return;
    }
    const aspectRatio = aspect ? parseFloat(aspect) : 1;
    const width = Math.floor(this.state.elementWidth);
    const height = Math.floor(width / aspectRatio);
    return imageBuilder.size(width, height).url();
  }

  render() {
    const { shape } = this.props;
    const className = `fey-window fey-window--${ shape }`
    let element = (
      <div className={ className }>
        <div className="fw-pseudo" style={{ background: this.props.background }} />
        <div className="fw-inner">
          { this.props.children }
        </div>
      </div>
    );
    if (this.props.imageBuilder) {
      element = (
        <img
          className={ className }
          src={ this.getImageUrl() }
        />
      );
    }
    return (
      <div>
        { element }
      </div>
    )
  }

}
