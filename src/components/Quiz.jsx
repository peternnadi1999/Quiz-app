import { ethereumQuiz } from "./questions";
import { useState,useContext, useEffect } from "react";
import { Quizcontext } from "../context/context";
import { CheckCircledIcon, ArrowRightIcon, ArrowLeftIcon } from '@radix-ui/react-icons'

const Quiz = ()=>{
    const [currentQuestion, setCurrentQuestion]= useState(0);
    const [answer, setAnswer] = useState("");
    const data= ethereumQuiz;
    const {score, setScore, game, setGame}= useContext(Quizcontext);
    const [selected, setSelected]= useState("") 
    const [isAnswered, setIsAnswer]= useState(false);
    

    const handleSelectedAnswer =(answer)=>{
        if(!isAnswered){

            setAnswer(answer);
        }
        
    }

    const Next =()=>{
        if(data[currentQuestion].correctAnswer === answer){
            setScore(score + 1);
        }

        if(!isAnswered){
        setCurrentQuestion(currentQuestion + 1);
        }
    }


    const submit =()=>{
        if(data[currentQuestion].correctAnswer === answer){
            setScore(score + 1);
        }
        setGame("end");
    }

    const getAnswerClass = (option) => {
        if (!isAnswered) {
            return option === answer ? "bg-gray-500 text-white" : "bg-gray-300";
        }

        if (option === data[currentQuestion].correctAnswer) return "bg-green-600 text-white";
        if (option === answer && option !== data[currentQuestion].correctAnswer) return "bg-red-600 text-white";
        return "bg-gray-300"; 
    };
    return(
        <>
           <div className="space-y-3 mt-9">

         
            <h1 className="font-bold text-lg text-center">Question</h1> 

            <div className="border w-1/2 m-auto border-gray-300 p-4 rounded-lg space-y-5">

            <p className="text-gray-600">{data[currentQuestion].id}. {data[currentQuestion].question}</p>

            <div className="grid grid-cols-2 text-gray-600 justify-between">

            {Object.keys(data[currentQuestion].options).map((optionKey) => (
                        <div
                            key={optionKey}
                            className={`m-4 p-3 rounded-md flex space-x-4 cursor-pointer ${getAnswerClass(optionKey)}`}
                            onClick={() => handleSelectedAnswer(optionKey)}
                        >
                            <label>{data[currentQuestion].options[optionKey]}</label>
                        </div>))}
            </div>
        {currentQuestion === data.length - 1 ?  
          <button className="font-semibold flex m-auto items-center text-white p-2 bg-neutral-900 hover:bg-neutral-600  py-2 px-4 text-sm rounded-md "  type="button" onClick={submit}>Submit </button>:
            
         
              <button className="font-semibold flex m-auto items-center bg-neutral-900 hover:bg-neutral-600  text-white py-2 px-4 text-sm rounded-md uppercase" onClick={Next} type="button">Next  <ArrowRightIcon className="ml-5"/></button>
          
               
          
           }

            </div>
            </div>
        </>

    );
}

export default Quiz;