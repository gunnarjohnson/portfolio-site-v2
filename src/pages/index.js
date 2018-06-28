/* global graphql */

import React from 'react';
import About from '../components/about';
import Contact from '../components/contact';
import Portfolio from '../components/portfolio';
import Skills from '../components/skills';

const IndexPage = props =>
  (<main>
    <About data={props.data.allDataJson.edges[0].node.about} />
    <Portfolio data={props.data.allDataJson.edges[0].node.portfolio} />
    <Skills data={props.data.allDataJson.edges[0].node.skills} />
    <Contact data={props.data.allDataJson.edges[0].node.contact} />
  </main>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          about {
            title
          }
          contact {
            title
          }
          portfolio {
            title
          }
          skills {
            title
          }
        }
      }
    }
  }
`;
