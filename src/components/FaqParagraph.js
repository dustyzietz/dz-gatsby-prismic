import React, {useState, useEffect} from 'react';
import Highlight from 'react-highlighter';


 const FaqParagraph = ({paragraph, searchInput}) => {

  const [currentText, setCurrentText] = useState([]);

  useEffect( () => {
     const {text, spans} = paragraph;
     if(spans.length > 0 && spans[0].type === 'hyperlink') {
   const textStart = text.slice(0, spans[0].start);
   const textLink = text.slice(spans[0].start, spans[0].end);
   const textEnd = text.slice(spans[0].end, text.length);
 setCurrentText([textStart, textLink, textEnd]);
     }  else {
    setCurrentText([text]);
     }
 },[paragraph]);


  return (
    <p>
     { currentText.length > 0 && <Highlight search={searchInput}>{currentText[0]}</Highlight>}
  <a href='http://localhost:8000'>
{ currentText.length > 0 && <Highlight matchClass='highlighted' search={searchInput}>{currentText[1]}</Highlight>}
    </a>
    {currentText.length > 0 && <Highlight  search={searchInput}> {currentText[2]}</Highlight> }
    </p>
  )
};

export default FaqParagraph;
