import React from 'react';
import * as styles from './oc-safety.module.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Discount from '../../components/Discount';

const OccupationalSafety = ({ data }) => {
  const { edges: occupationalSafetyContent } = data.allOccupationalSafetyContentJson;
  const { heading, mainText } = data.allDiscountContentJson.edges[0].node;

  return (
    <Layout>
      <main>
        <section className={styles.content}>
          <h1 className={styles.pageHeading} data-sal="zoom-out" data-sal-duration="500">
            Охрана труда
          </h1>
          <section className={styles.cards}>
            {occupationalSafetyContent.map(
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
                    <GatsbyImage
                      image={image}
                      alt={cardHeading}
                      className={styles.image}
                    />
                    <div className={styles.info}>
                      <h2 className={styles.infoHeading}>{cardHeading}</h2>
                      <p className={styles.text}>{cardSubHeading}</p>
                      <ol className={styles.list}>
                        Что дает:
                        {advantagesList.map(({ advantage, list }) => {
                          const optionalAdvantages =
                            list.length === 0 ? (
                              ''
                            ) : (
                              <ul>
                                {list.map((el) => (
                                  <li key={el}>{el}</li>
                                ))}
                              </ul>
                            );

                          return (
                            <li key={`${advantage}-${id}`}>
                              {advantage}
                              {optionalAdvantages}
                            </li>
                          );
                        })}
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
        </section>
        <Discount heading={heading} mainText={mainText} />
      </main>
    </Layout>
  );
};

export default OccupationalSafety;

export const query = graphql`
  {
    allOccupationalSafetyContentJson {
      edges {
        node {
          advantagesList {
            advantage
            list
          }
          cardHeading
          id
          priceInfo
          cardSubHeading
          imgSrc {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, quality: 80)
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
          additionalText
        }
      }
    }
  }
`;
