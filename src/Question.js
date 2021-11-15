import React, { useState } from 'react';
import { BiChevronDown,BiChevronUp } from "react-icons/bi"

const Question = ({ faq }) => {

const { question,answer } = faq;
const [ isAnswer,setIsAnser ] = useState(false);

    return ( 
        <>
            <div className="faq-box">
                <div className="question-box">
                  <h4>{question}</h4>
                  <span onClick={()=>{setIsAnser(!isAnswer)}}>
                      {
                         isAnswer ? <BiChevronUp /> : <BiChevronDown /> 
                      }
                  </span>
                </div>
                <div className="answer-box">
                    {
                        isAnswer && <p>{answer}</p>
                    }
                </div>
            </div>
        </>
    );
};

export default Question;