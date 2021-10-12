import React, { Fragment } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
  <Fragment>
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
       <StaticImage
        alt="Gatsby Logo"
        src="../images/gatsby-icon.png"
      />
    </Layout>
  </Fragment>
  );
}

export default IndexPage;
