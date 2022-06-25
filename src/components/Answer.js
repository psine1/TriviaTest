import React from "react";
import "./Answer";
//import data from "../data";
//import{useState, useEffect} from "react";
import './Answer.css';
import ProgressBar from './ProgressBar';



function Answer({info}) {

  var TotalPeople = info.valueStats;
  var summed = 0;
  for (var key in TotalPeople) {
      summed += TotalPeople[key];
  };


  const testData = [
    { bgcolor: "#48C799", completed: (TotalPeople.A * 100) / summed  },
    { bgcolor: "#48C799", completed: (TotalPeople.B * 100) / summed  },
    { bgcolor: "#48C799", completed: (TotalPeople.C * 100) / summed  },
    { bgcolor: "#48C799", completed: (TotalPeople.D * 100) / summed  },    
  ];  

    const url = info.textSourceUrl;

    const textsQuestions = info.textQuestions;

    

    return (
        

      <div className="container app-trivia m-b">
      <div className="column">
          <h3 className="title-explanation">Learn More!</h3>
          <p className="explanation">{info.textCorrectExplanation}</p>
          <p className="sources"><a href={url} target="_blank">{url}</a></p>  

          <div className="wrap-bar">
          <div >{info.textsQuestions}</div> 
              {testData.map((item, idx) => (    
                <>

                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                </>
              ))}   
                                        
          </div>

      </div>



  </div>


  );


}

export default Answer; 
