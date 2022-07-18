import React from 'react';
import * as styles from './work-examples.module.scss';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';

const WorkExamples = ({ data }) => {
  const { edges: workExamplesData } = data.allWorkExamplesJson;

  return (
    <Layout>
      <main>
        <section className={styles.container}>
          <h1 className={styles.mainHeading}>Примеры работ</h1>
          <p className={styles.paragraph}>
            Для того что бы вам, было легче узнать похожую ситуацию и увидеть пути решения
          </p>
          <section className={styles.examples}>
            {workExamplesData.map(({ node: { imgSrc, heading, text } }) => {
              const image = getImage(imgSrc);

              return (
                <article key={heading} className={styles.example}>
                  <GatsbyImage image={image} alt={heading} className={styles.image} />
                  <div>
                    <h2 className={styles.exampleHeading}>{heading}</h2>
                    <p className={styles.paragraph}>{text}</p>
                  </div>
                </article>
              );
            })}
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default WorkExamples;

export const query = graphql`
  {
    allWorkExamplesJson {
      edges {
        node {
          text
          heading
          imgSrc {
            childImageSharp {
              gatsbyImageData(layout: FIXED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
