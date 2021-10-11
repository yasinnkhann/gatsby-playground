import React, { Fragment } from 'react';
import { Link } from "gatsby";
import * as indexStyle from '../../styles/indexStyle.module.css';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';


const IndexPage = () => {
  return (
  <Fragment>

    {/* <header>
      <nav>
        <a href="#">My Portfolio</a>
        <a href="#">Contact Me</a> 
        <Link to="/about">About</Link>!
      </nav>
    </header>

    <main>
      <p>
        Eiusmod ut culpa ullamco elit qui in cillum in. Sit aliquip id aliquip occaecat officia aute pariatur occaecat proident dolor labore irure non. Pariatur do cillum ut aliquip do ea reprehenderit sit dolore dolor ea proident commodo. In ullamco proident cillum ipsum officia.
      </p>
      <span>Lets go to <Link to="/page2">Page 2</Link>!</span>
    </main>

    <footer>
      <div className={indexStyle.footerCaption}>Anim tempor consectetur proident in proident esse.</div>
    </footer> */}

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

export default IndexPage
