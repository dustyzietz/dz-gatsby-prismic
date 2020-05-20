import React from 'react';
import Img from "gatsby-image";
import { useStaticQuery,graphql } from "gatsby"

export default function Image1() {
  
  const data = useStaticQuery(graphql`
    query{
      file(relativePath: { eq: "ca-crew.jpg" }) {
        childImageSharp {
          fluid (maxWidth: 1360, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`)

  return (
    <div className='faq-image-container' style={{position:'relative',minHeight:'400px',width:'100%',maxHeight:'540px',overflow:'hidden'}}>
      <Img
     className='faq-image image1' style={{position:'static',minHeight:'400px',maxHeight:'540px'}}
  fluid={data.file.childImageSharp.fluid}
  alt="image1"
/> 
<div className='gradient-top '></div>
<div className='gradient-bottom'></div>

    </div>
  )
}

