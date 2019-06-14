import Head from 'next/head'
import Nav from './Nav.js';
import Footer from './Footer.js';

const social_img_url = 'http://fey-arts.com/static/social-wide.jpg';
const title = 'Fey — A multidisciplinary arts festival in Bourgogne. 20-22 September 2019';
const description = 'Multidisciplinary arts festival in Bourgogne';

export default class Home extends React.Component {

  render () {
    return (
      <div>
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-93943838-4"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
                function gtag(){
                  dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'UA-93943838-4');
            `
          }}/>

          <meta name="description" content={ description } />
          <meta itemprop="name" content={ title } />
          <meta itemprop="description" content={ description } />
          <meta itemprop="image" content={ social_img_url } />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="" />
          <meta name="twitter:title" content={ title } />
          <meta name="twitter:description" content={ description } />
          <meta name="twitter:image:src" content={ social_img_url } />
          <meta property="og:title" content={ title } />
          <meta property="og:image" content={ social_img_url } />
          <meta property="og:description" content={ description } />
          <meta property="og:site_name" content={ title } />
          <meta property="og:url" content="https://fey-arts.com" />

          <title>{ title }</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,600&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="/static/style.css" />

        </Head>
        <div id="main">
          <Nav {...this.props } />
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}
