import React, { useEffect, useState } from 'react';

import './Trivia.css'
import axios from "axios";


const Trivia = () => {

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [ind, setInd] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(()=>{
        window.onbeforeunload = function() {
            const formData = new FormData();
		    formData.append("username", localStorage.getItem("name"));
		    formData.append("password", localStorage.getItem("password"));
            axios
            .post("url_of_server", formData)
            .then((res) => {
                if(res.data == localStorage){
                    
                }
                else{
                    localStorage.clear();
                    window.open('./components/Login');
                }
            }).catch((err)=>{
                console.log(err);
            });
        };
        
        
        axios
            .get("url_of_server")
            .then((res) => {
                setQuestions(Object.values(res.data));
            }).catch((error) => {
                console.log(error)
            });
        axios
            .get("http://mwinkler.eu5.net/answers.php")
            .then((res) => {
                setAnswers(Object.values(res.data));
            }).catch((error) => {
                console.log(error)
            });
    }, [])

    const handleNext = (event) => {
        const formData = new FormData();
		formData.append("username", localStorage.getItem("name"));
		formData.append("password", localStorage.getItem("password"));
        axios
            .post("url_of_server", formData)
            .then((res) => {
                if(res.data == localStorage.getItem("name")){
                    
                }
                else{
                    localStorage.clear();
                    window.location.reload();
                }
            }).catch((err)=>{
                console.log(err);
            });
        if(ind > 4){
            localStorage.setItem("score", score);
        
        }
        else{
            
             if(ind < answers.length && answers[ind].answer == event.target.value){
                        setScore(score+1);
            }
        }
        setInd(ind+1);
    }

    const reset = () => {
        setInd(0);
        setScore(0);
    }

    return ( 
      
        <div className="TriviaMainDiv">
            {questions !== null && ind < questions.length? 
                <div>
                    <h1 className="questionHeader">{questions[ind].question}</h1>
                    <button className="TriviaSubmitBtn" onClick={handleNext} value={questions[ind].answer1}>{questions[ind].answer1}</button>
                    <button className="TriviaSubmitBtn" onClick={handleNext} value={questions[ind].answer2}>{questions[ind].answer2}</button>
                    <button className="TriviaSubmitBtn" onClick={handleNext} value={questions[ind].answer3}>{questions[ind].answer3}</button>
                </div> 
            : ind == 5 ? <div> 
                <h1 className="nameHeader" >Your Score is : {score} / {ind}</h1> 
                <button className="submitBtn" onClick={reset}>Reset</button>
                </div>: "Hello"}
        </div>  
        
        
     );
}
 
export default Trivia;
