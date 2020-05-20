import React, {useState} from 'react';
import Highlight from 'react-highlighter';
import FaqParagraph from './FaqParagraph';




export const Faq = ({title, content, searchInput}) => {

  const [open, setOpen] = useState(false);

  return (
    <div>
     <h4 style={{marginTop:'0', color:'#08c'}} onClick={()=>{setOpen(!open)}}>  
       <Highlight matchClass='highlighted' search={searchInput}>{title[0].text}</Highlight>
        </h4>
     {open && content.map((paragraph, i) => {
       return <FaqParagraph key={i} paragraph={paragraph} searchInput={searchInput}/>
     })}
    </div>
  )
}
  