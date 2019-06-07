import Head from 'next/head'
import Nav from './Nav.js';
import Footer from './Footer.js';

export default props => (
  <div>
    <Head>
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
      <meta name="description" content="Multidisciplinary arts festival in Burgundy" />
      <meta itemprop="name" content="Fey" />
      <meta itemprop="description" content="Multidisciplinary arts festival in Burgundy" />
      <meta itemprop="image" content="http://fey-arts.com/images/fey_officiel.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:title" content="Fey" />
      <meta name="twitter:description" content="Multidisciplinary arts festival in Burgundy" />
      <meta name="twitter:image:src" content="http://fey-arts.com/images/fey_officiel.png" />
      <meta property="og:title" content="Fey" />
      <meta property="og:image" content="http://fey-arts.com/images/fey_officiel.png" />
      <meta property="og:description" content="Multidisciplinary arts festival in Burgundy" />
      <meta property="og:site_name" content="Fey" />
      <meta property="og:url" content="http://fey-arts.com" />
      <title>Fey – Rencontres d&#039;arts &#8211; Multidisciplinary artistic festival in Burgundy. 20-22 September 2019</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,600&display=swap" rel="stylesheet"/> 
      <link rel="stylesheet" href="/static/style.css" />
    </Head>
    <div id="main">
      <Nav marquees={ props.marquees }/>
      { props.children }
    </div>
    <Footer />
  </div>
)
