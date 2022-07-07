import React from 'react';
import * as styles from './work-examples.module.scss';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';

const WorkExamples = ({ data }) => {
  const { workExamples } = data.allContentJson.edges[1].node;

  return (
    <Layout>
      <main>
        <section className={styles.container}>
          <h1 className={styles.mainHeading}>Примеры работ</h1>
          <p className={styles.paragraph}>
            Для того что бы вам, было легче узнать похожую ситуацию и увидеть пути решения
          </p>
          <section className={styles.examples}>
            {workExamples.map(({ imgSrc, heading, text }) => {
              const image = getImage(imgSrc);

              return (
                <article key={heading} className={styles.example}>
                  <GatsbyImage image={image} alt={heading} />
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
    allContentJson {
      edges {
        node {
          workExamples {
            heading
            text
            imgSrc {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
