import React, { Fragment } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

export default function blog({ data }) {
    return (
        <Fragment>
             <Layout pageTitle="My Blog Posts">
              {
                data.allMdx.nodes.map(node => (
                  <article key={node.id}>
                    <h2>
                      <Link to={`/blog/${node.slug}`}>
                        {node.frontmatter.title}
                      </Link>
                    </h2>
                    <p>Posted: {node.frontmatter.date}</p>
                  </article>
                ))
              }
             </Layout>
        </Fragment>
    );
};

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;