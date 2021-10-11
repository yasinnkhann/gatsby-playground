import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

export default function blog({ data }) {
    return (
        <div>
            <Layout pageTitle="My Blog Posts">
              {
                data.allMdx.nodes.map((node) => (
                  <article key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>Posted: {node.frontmatter.date}</p>
                    <MDXRenderer>
                      {node.body}
                    </MDXRenderer>
                  </article>
                ))
              }
            </Layout>
        </div>
    )
}

export const query = graphql`
  query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      body
    }
  }
}
`;