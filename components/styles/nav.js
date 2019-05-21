import css from 'styled-jsx/css'

export default css`
  nav {
    position: fixed;
    align-items: center;
    top: 0;
    left: 0;
    height: 7rem;
    width: 100%;
    font-size: 1rem;
    background: #FFF;
    color: #000;
    z-index: 10;
  }

  .marquee {
    font-size: 1.4rem;
    height: 1.6rem;
    overflow: hidden;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 1rem 0;
  }

  nav a {
    flex-grow: 1;
    text-decoration: none;
    text-align: center;
  }
  `
