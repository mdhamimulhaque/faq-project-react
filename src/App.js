import './App.css';
import Data from "./data";
import { useState } from 'react';
import Question from './Question';


function App() {
  const [faqData, setFaqData] = useState(Data);

  return (
    <main className="App">
     <h2 style={{color:"orange"}}>FAQ</h2>
     {
       faqData.map(faq =>{
         return(
          <Question key={faq.id} faq={faq} />
         )
       })
     }
    </main>
  );
}

export default App;
