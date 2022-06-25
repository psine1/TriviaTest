import data from "./data";
import './App.css';
import{useState, useEffect} from "react";
import Answer from './components/Answer';

function App() {

        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [score, setScore] = useState(0);
        const [isFinished, setIsFinished] = useState(false);
        //const [timeLeft, setTimeLeft] = useState(10);
        const [areDisabled, setAreDisabled] = useState(true);
        const [answerShown, setAnswerShown] = useState(false);
        const [showComponent, setShowComponent] = useState(false);

        const btn_answer = <button className="btn-answer answer-btn" disabled={areDisabled} onClick={() => (viewAnswers()) }>Answer</button>  ;
        const btn_next = <button className="btn-answer answer-btn" disabled={areDisabled} onClick={() => changeQuestion()}>Next Question</button>  ;


/* envio de info por props */ 
      const info = {
                    textCorrectExplanation: data[currentQuestion].correctExplanation,
                    textSourceUrl: data[currentQuestion].sourceURL,
                    valueStats: data[currentQuestion].stats,
                    textQuestions: data[currentQuestion].choices,
                   }

      

        function handleAnswerSubmit(isCorrect, e){

              setAreDisabled(false);
                // add score
                if (isCorrect) setScore(score +1)
                // add styles question
                e.target.classList.add(isCorrect ? "correct" : "incorrect");

                // change next question
                setTimeout(() => {

/*                  
                  if (currentQuestion === data.length - 1) {
                //   setIsFinished(true);
                  } 
                  else {
                //    setCurrentQuestion(currentQuestion + 1);
                  }
*/                  

                }, 500)
        }


      function viewAnswers (e){
          setShowComponent(!showComponent)     
          
      }

      function changeQuestion (){
        
        if (currentQuestion === data.length - 1) {
          setIsFinished(true);
        } 
        else {
          setCurrentQuestion(currentQuestion + 1);
          setAreDisabled(true);
        }

        setShowComponent(!showComponent)
      }      


        if (isFinished) return (
          <main className="app-trivia container">
            <div className="juego-terminado">
              <span> Score  {score} out of {data.length} {""} </span>
              <button onClick={() => (window.location.href="/")}>{""}Play Again</button>

            </div>

          </main>
        )

        if (answerShown)
          return (<main className="app-trivia container">
            
              <div className="top-question column">               
                    
                    <div className="question-title">
                      {data[currentQuestion].text}
                    </div> 

                    <div> 
                      {data[currentQuestion].choices.filter((opcion) => opcion.isCorrect)[0].textQuestion}
                    </div>
                    <button onClick={() => {
                                if (currentQuestion === data.length - 1) {
                                  window.location.href = "/";
                                } 
                                else {
                                  setCurrentQuestion(currentQuestion + 1);
                                }
                    }}>
                      {currentQuestion === data.length - 1 ? "Play Again" : "Next"}
                    </button>
                  
              </div>

          </main>)

        return (
          <main className="container">  
            <div className="app-trivia container">    
                    <div className="top-question column">
                        <div className="wrap-texts column">
                            <div className="badge">
                              {data[currentQuestion].category}
                            </div>                      
                            <div className="question-title">
                              {data[currentQuestion].text}
                            </div>                                  
                        </div>
                        <div className="wrap-img column">
                              <div className="img-dyn">
                                   <img src={data[currentQuestion].imageURL} />                          
                              </div>
                              <div className="badge-mobile">{data[currentQuestion].category}</div>                        
                       </div>         
                    </div>

                    <div className="bottom-question">            
                          {data[currentQuestion].choices.map((data) => (
                            <div className="column col-6 col-12-sm" key={data.textQuestion}>
                                <div className="btn-answer col-6 col-12-sm" disabled={areDisabled}  onClick={(e) => handleAnswerSubmit(data.isCorrect, e)}>
                                  {data.textQuestion}
                                </div>
                            </div>  
                          ))}   
                          
                            <div className="column col-12">                                  
                                  {!showComponent && btn_answer}
                                  {showComponent && btn_next }                                  
                            </div>                                                          
                    </div>        
              </div>  

                <div className={showComponent ? "show-element" : null}>
                  {showComponent && <Answer info={info }/> }
                </div>
                        
          </main>


        );
}




export default App;


