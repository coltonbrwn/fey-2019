import React from 'react';

const ANIMATION_MS = 30000;
const NUM_COPIES = 100;
const MAX_DISTANCE = 3000;

export default class Marquee extends React.Component {

  constructor() {
    super();
    this.state = {
      transform: 0
    }
  }

  componentDidMount() {
    const transformPx = (this.props.reverse ? -1 : 1 ) * MAX_DISTANCE;
    function animate() {
      this.setState({
        transform: this.state.transform ? 0 : transformPx
      })
    }
    animate.call(this);
    this.interval = window.setInterval(animate.bind(this), ANIMATION_MS);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { text, reverse } = this.props;
    const { transform } = this.state;
    let innerText = '';
    for (var i = 0; i < NUM_COPIES; i++) {
      innerText += `  ${ text }`;
    }
    return (
      <div className="marquee__outer">
        <div className="marquee__inner" style={{ transform: `translateX(${ transform }px)` }}>
          {
            innerText
          }
        </div>
        <style jsx>{`
          .marquee__inner {
            transition: ${ ANIMATION_MS }ms transform linear;
            position: absolute;
            ${ reverse ? 'left' : 'right' }: 0;
          }
        `}</style>
      </div>
    );
  }
}
