import Head from 'next/head'
import globalStyles from './styles/global'
import styles from './styles/layout'
import Nav from './Nav.js';

export default props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div id="main">
      <Nav />
      {props.children}
    </div>
    <footer>

    </footer>
    <style jsx>{styles}</style>
    <style jsx global>{globalStyles}</style>
  </div>
)
