import React from 'react';
import './MoreQuestions.css';
import img1 from '../img/moreQuestions/img-1.png'; 
import img2 from '../img/moreQuestions/img-2.jpg'; 
import img3 from '../img/moreQuestions/img-3.png'; 




function MoreQuestions() {
    return (
        <>
                <div className="container m-t">    
                    <div className="wrap-cards">   
                        <div className="col-4">
                                <div className="ps-card">	
                                        <div className="img-card">
                                      <img src={img1} alt="Trivia Test" />  
                                        </div>	
                                        <p className="text-center m-b">
                                        Which natural disaster 
                                        is measured with a Richter scale?                   
                                        </p> 
                                        <p className="font-link">Answer Now</p>                                          

                                </div>											
                            </div>

                            <div className="col-4">
                                <div className="ps-card">	
                                        <div className="img-card">
                                      <img src={img2} alt="Trivia Test" />  
                                        </div>	
                                        <p className="text-center m-b">In which state can you find the mountain range Sierra de Picachos?</p>  
                                        <p className="font-link">Answer Now</p>                                          
                                </div>											
                            </div>

                            <div className="col-4 ">
                                <div className="ps-card">	
                                        <div className="img-card">
                                      <img src={img3} alt="Trivia Test" />  
                                        </div>	
                                        <p className="text-center m-b">What countries made up the original Axis powers in World War II?</p>  
                                        <p className="font-link">Answer Now</p>                                                                                                                            
                                </div>											
                            </div>                            

                    </div>                            
                </div>
        </>
  );



}

export default MoreQuestions; 
