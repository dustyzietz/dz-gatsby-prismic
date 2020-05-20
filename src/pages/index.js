import React from "react"
import Image1 from "../components/Image1"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Faqs from "../components/Faqs"

export default ({ data }) => {
  return (
    <div
      className="container"
      style={{ lineHeight: "1em", letterSpacing: ".2px" }}
    >
      <Image1 />
      <div className="island" style={{ maxWidth: "1200px", margin: "auto" }}>
        <h1 style={{ fontFamily: "Roboto", fontSize: "42px" }}>
          {RichText.render(data.prismic.allFaqPages.edges[0].node.title1)}
        </h1>
        <div className="mar-t16 f18 c54">
          {" "}
          {RichText.render(data.prismic.allFaqPages.edges[0].node.infoLine)}
        </div>
        <Faqs />
      </div>
    </div>
  )
}
export const query = graphql`
  {
    prismic {
      allFaqPages {
        edges {
          node {
            description
            title1
            infoLine
            search
            title
            topics
            tours
            _linkType
            body {
              ... on PRISMIC_FaqPageBodyText {
                fields {
                  faqTitle
                  faqContent
                }
                type
              }
            }
          }
        }
      }
    }
  }
`
