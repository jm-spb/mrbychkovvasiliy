import React from 'react';
import * as styles from './fire-safety.module.scss';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import Discount from '../../components/Discount';

const FireSafety = ({ data }) => {
  const { edges: fireSafetyContent } = data.allFireSafetyContentJson;
  const { heading, mainText } = data.allDiscountContentJson.edges[0].node;

  return (
    <Layout>
      <main>
        <article className={styles.content}>
          <h1 className={styles.pageHeading}>Пожарная безопасность</h1>
          <section className={styles.cards}>
            {fireSafetyContent.map(
              ({
                node: {
                  id,
                  advantagesList,
                  cardHeading,
                  priceInfo,
                  cardSubHeading,
                  imgSrc,
                },
              }) => {
                const image = getImage(imgSrc);

                return (
                  <article key={id}>
                    <GatsbyImage image={image} alt={cardHeading} className={styles.img} />
                    <div className={styles.info}>
                      <h2 className={styles.infoHeading}>{cardHeading}</h2>
                      <p className={styles.text}>{cardSubHeading}</p>
                      <ol className={styles.list}>
                        Что дает:
                        {advantagesList.map((advantage) => (
                          <li key={`${advantage}-${id}`}>{advantage}</li>
                        ))}
                      </ol>
                      <div className={styles.price}>
                        {priceInfo.map((price) => (
                          <p key={`${price}-${id}`}>{price}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              },
            )}
          </section>
        </article>
        <Discount heading={heading} mainText={mainText} />
      </main>
    </Layout>
  );
};

export default FireSafety;

export const query = graphql`
  {
    allFireSafetyContentJson {
      edges {
        node {
          advantagesList
          cardHeading
          id
          priceInfo
          cardSubHeading
          imgSrc {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, quality: 80)
            }
          }
        }
      }
    }
    allDiscountContentJson {
      edges {
        node {
          heading
          mainText
        }
      }
    }
  }
`;
