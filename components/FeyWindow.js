import React from 'react';


export default class FeyWindow extends React.Component {

  constructor( props ) {
    super();
    this.state = {
      elementWidth: 1200
    }
  }

  componentDidMount() {
    document.addEventListener('visibilitychange', () => {
      this.forceUpdate();
    })
  }

  getImageUrl() {
    const { aspect, imageBuilder } = this.props;
    if (!imageBuilder) {
      return;
    }
    const aspectRatio = aspect ? parseFloat(aspect) : 1;
    const width = Math.floor(this.state.elementWidth);
    const height = Math.floor(width / aspectRatio);
    const baseURL = imageBuilder.size(width, height).url();
    const cfUrl = baseURL.replace('cdn.sanity.io', 'd38tzjzftfz9b8.cloudfront.net');
    return cfUrl
  }

  render() {
    const { shape } = this.props;
    let element = (
      <div>
        <div className="fw-pseudo" style={{ background: this.props.background }} />
        <div className="fw-inner">
          { this.props.children }
        </div>
      </div>
    );
    if (this.props.imageBuilder) {
      element = (
        <img
          draggable={ false }
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
