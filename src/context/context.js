import { createContext } from "react";

export const Quizcontext = createContext();




// import { ethereumQuiz } from "./questions";
// import { useState,useContext, useEffect } from "react";
// import { Quizcontext } from "../context/context";
// import { CheckCircledIcon, ArrowRightIcon, ArrowLeftIcon } from '@radix-ui/react-icons'

// const Quiz = ()=>{
//     const [currentQuestion, setCurrentQuestion]= useState(0);
//     const [answer, setAnswer] = useState("");
//     const data= ethereumQuiz;
//     const {score, setScore, game, setGame}= useContext(Quizcontext);
//     const [selected, setSelected]= useState("") 
//     const [isAnswer, setIsAnswer]= useState(false);
    

//     const hanleSelectedAnswer =(answer)=>{
//         if(!isAnswer){

//             setAnswer(answer);
//         }
        
//     }

//     const Next =()=>{
//         if(data[currentQuestion].correctAnswer === answer){
//             // setSelected(<CheckCircledIcon className="text-green-700 w-6 h-6"/>)
//             setScore(score + 1);
//         }else{
            
//             // setSelected(<CrossCircledIcon className="text-red-700 w-6 h-6"/>)
//         }

//         console.log(score);

//         if(!isAnswer){
//         setCurrentQuestion(currentQuestion + 1);
//         }
//     }


//     const submit =()=>{
//         if(data[currentQuestion].correctAnswer === answer){
//             setScore(score + 1);
//         }
//         setGame("end");
//     }

//     const handleSubmit = ()=>{
//         const currentQues = ethereumQuiz[currentQuestion];

        

//     };
    
//     return(
//         <>
//            <div className="space-y-3 mt-9">

         
//             <h1 className="font-bold text-lg text-center">Question</h1> 

//             <div className="border w-1/2 m-auto border-gray-300 p-4 rounded-lg space-y-5">

//             <p className="text-gray-600">{data[currentQuestion].id}. {data[currentQuestion].question}</p>

//             <div className="grid grid-cols-2 text-gray-600 justify-between">

               
//                 <div className={`${answer == "A"? "bg-gray-600 text-white" : "bg-gray-300 "} " m-4 p-3 rounded-md flex space-x-4"`} onClick={()=>hanleSelectedAnswer("A")} >
//                     <label htmlFor="a">{data[currentQuestion].options.A} </label>
//                 </div>
//                 <div className={`${answer == "B" ? "bg-gray-600 text-white" : "bg-gray-300 "} " m-4 p-3 rounded-md flex space-x-4"`} onClick={()=>hanleSelectedAnswer("B")} >
//                     <label htmlFor="b">{data[currentQuestion].options.B} </label>
//                 </div>
//                 <div className={`${answer == "C" ? "bg-gray-600 text-white" : "bg-gray-300 "} " m-4 p-3 rounded-md flex space-x-4"`} onClick={()=>hanleSelectedAnswer("C")} >
//                     <label htmlFor="c">{data[currentQuestion].options.C} </label>
//                 </div>
//                 <div className={`${answer== "D" ? "bg-gray-600 text-white" : "bg-gray-300 "} " m-4 p-3 rounded-md flex space-x-4"`}onClick={()=>hanleSelectedAnswer("D")} >
//                     <label htmlFor="d">{data[currentQuestion].options.D} </label>
//                 </div>
//             </div>
//         {currentQuestion === data.length - 1 ?  
//           <button className="font-semibold flex m-auto items-center text-white p-2 bg-neutral-900 hover:bg-neutral-600  py-2 px-4 text-sm rounded-md "  type="button" onClick={submit}>Submit </button>:
            
         
//               <button className="font-semibold flex m-auto items-center bg-neutral-900 hover:bg-neutral-600  text-white py-2 px-4 text-sm rounded-md uppercase" onClick={Next} type="button">Next  <ArrowRightIcon className="ml-5"/></button>
          
               
          
//            }

//             </div>
//             </div>
//         </>

//     );
// }

// export default Quiz;