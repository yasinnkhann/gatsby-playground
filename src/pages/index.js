import React, { Fragment } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
  <Fragment>
    <Layout pageTitle="Home Page">
      <p>
        This is my blog that I coded with gatsby and I have to say, I'm a big fan. All of these blogs were created via markdown and were injected into html via graphQl. Such a simple way of doing it than using next.js in my opinion. BIG GATSBY FAN!
      </p>
       <StaticImage
        alt="Gatsby Logo"
        src="../images/gatsby-icon.png"
      />
    </Layout>
  </Fragment>
  );
};

export default IndexPage;
