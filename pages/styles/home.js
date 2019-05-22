/* styles.js */
import css from 'styled-jsx/css'

export default css`
  img {
    width: 100%;
  }
  .home-container__left {
    flex: 2;
  }
  .home-container__right {
    flex: 1;
  }
  .home-text-inner {
    max-width: 22em;
  }
  .marquee-2 {
    padding: 1.4rem 0;
    height: 1.25em;
    line-height: 1.5;
    overflow: hidden;
    text-transform: uppercase;
    word-spacing: 0.4em;
    white-space: nowrap;
    position: relative;
  }
  .marquee-2 span {
    white-space: nowrap;
  }
`
