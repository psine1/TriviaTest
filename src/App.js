import logo from './logo.svg';
import './App.css';

function App() {

        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [score, setScore] = useState(0);
        const [isFinished, setIsFinished] = useState(false);
        //const [timeLeft, setTimeLeft] = useState(10);
        const [areDisabled, setAreDisabled] = useState(true);
        const [answerShown, setAnswerShown] = useState(false);
        const [showComponent, setShowComponent] = useState(false);


/*
        var textCorrectExplanation = data[currentQuestion].correctExplanation;
        var textSourceUrl = data[currentQuestion].sourceURL;
        var valueStats = data[currentQuestion].stats;

        */

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

                  
                  if (currentQuestion === data.length - 1) {
                //   setIsFinished(true);
                  } 
                  else {
                //    setCurrentQuestion(currentQuestion + 1);
                  }
                  

                }, 500)
        }


      function changeQuestion (){

        setShowComponent(!showComponent)
        
        if (currentQuestion === data.length - 1) {
          setIsFinished(true);
        } 
        else {
          setCurrentQuestion(currentQuestion + 1);
          setAreDisabled(true);
        }

        

      }


        /*
        useEffect(() => {

            const intervalo = setInterval(() => {
              if(timeLeft > 0) setTimeLeft((prev) => prev - 1);
              if(timeLeft === 0) setAreDisabled(true);
            }, 1000);

            return () => clearInterval(intervalo);
        }, [timeLeft]);

      */


        if (isFinished) return (
          <main className="app-trivia container">
            <div className="juego-terminado">
              <span> Obtuviste {score} de {data.length} {""} </span>
              <button onClick={() => (window.location.href="/")}>{""}Volver a Jugar</button>
              <button onClick={() => {
                setIsFinished(false);
                setAnswerShown(true);
                setCurrentQuestion(0);

              }}>ver respuestas</button>
            </div>

          </main>
        )

        if (answerShown)
          return (<main className="app-trivia container">
            
              <div className="top-question column">
                    <div className="numero-pregunta">
                      <span>pregunta {currentQuestion + 1} de </span> {data.length}
                    </div>
                    
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
                      {currentQuestion === data.length - 1 ? "volver a jugar" : "siguiente"}
                    </button>
                  
              </div>

          </main>)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
