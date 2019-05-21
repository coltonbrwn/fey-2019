import React from 'react';

import Layout from '../components/Layout';

export default class Typography extends React.Component {

  render() {
    return (
      <Layout>
        <div className="type-container">
          <h1>Fey Rencontres D'Arts</h1>
          <h2>Fey Rencontres D'Arts</h2>
          <h3>Fey Rencontres D'Arts</h3>
          <h4>Fey Rencontres D'Arts</h4>
          <p>Feÿ est une plateforme pluridisciplinaire focalisée sur la création contemporaine française et internationale. En mélangeant différents médiums, l’événement souhaite créer un dialogue artistique et des expérimentations à plusieurs voix. La programmation rassemble des artistes venus autant du cinéma que de la musique, de l’édition, des arts plastiques ou performatifs, de l’architecture et de la gastronomie. Ils et elles ont été invité.e.s à créer des oeuvres spécialement pour le festival en s’inspirant de l’espace du château. Elles vous seront révélées du 20 au 22 septembre 2019 avec, au programme : une exposition d’art, des concerts et projections exclusives, de la danse et des happenings, des pop-up et performances culinaires et même une bibliothèque itinérante. </p>
        </div>
        <style jsx>
          {`
            .type-container {
              padding: 10em;
              width: 40em;
            }
          `}
        </style>
      </Layout>
    )
  }
}
