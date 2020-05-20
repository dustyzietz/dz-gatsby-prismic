import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby"
import { RichText } from "prismic-reactjs"
import { Faq } from "./Faq"

 


const Faqs = () => {


  const data = useStaticQuery(graphql`
    query{
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
`)

const [searchInput, setSearchInput] = useState('');
const [currentQuestions, setCurrentQuestions] = useState(data.prismic.allFaqPages.edges[0].node.body[0].fields);

const handleChange = (e) => {
setSearchInput(e.target.value);
}

useEffect(()=>{   
   let newQuestions = data.prismic.allFaqPages.edges[0].node.body[0].fields.filter(question => {
    let questionText = question.faqTitle[0].text.toLowerCase();
   return  questionText.includes(searchInput.toLowerCase())
   });
   setCurrentQuestions(newQuestions);
},[searchInput])

  return (
       <div className="faq pad-t16">
       
          <input
          name="search"
            type="text"
            defaultValue=""
            placeholder={
              data.prismic.allFaqPages.edges[0].node.search[0].text
            }
            onChange={handleChange}
            tabIndex="0"
          />
          <div className='nav-jump f14 c54'>
          {RichText.render(data.prismic.allFaqPages.edges[0].node.topics)}
          </div>
          <ul > 
             
           <li><h2>{data.prismic.allFaqPages.edges[0].node.tours[0].text}</h2></li>  
          {currentQuestions.map(
            (faq, i) => {
              return (
                <li key={i} id={`faq-${i}`}>
                <Faq title={faq.faqTitle} content={faq.faqContent} searchInput={searchInput} />
                </li>
              )
            }
          )}
       
          </ul>
         
        </div>
  )
}

export default Faqs;