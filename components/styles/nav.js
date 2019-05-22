import css from 'styled-jsx/css'

export default css`
  nav {
    position: fixed;
    align-items: center;
    top: 0;
    left: 0;
    height: 9rem;
    width: 100%;
    font-size: 1rem;
    background: #FFF;
    color: #000;
    z-index: 10;
    /* overflow: hidden; */
  }

  .marquee {
    font-size: 1.4rem;
    height: 4rem;
    overflow: hidden;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 1.4rem 0;
    box-sizing: border-box;
  }

  .nav-logo-dummy {
    margin-top: 4.6rem;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;

    display: none;
  }
  .nav-logo {
    text-align: center;
    padding: 0.6rem;
  }
  .nav-logo-dummy img,
  .nav-logo img {
    height: 11rem;
  }

  nav a {
    flex-grow: 1;
    text-decoration: none;
    text-align: center;
  }
  `
