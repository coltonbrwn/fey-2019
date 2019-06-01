import Head from 'next/head'
import Nav from './Nav.js';
import Footer from './Footer.js';

export default props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/static/style.css" />
    </Head>
    <div id="main">
      <Nav />
      { props.children }
    </div>
    <Footer />
  </div>
)
