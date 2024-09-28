import { ethereumQuiz } from "./questions";
import { useContext } from "react";
import { Quizcontext } from "../context/context";

const Endscreen =()=>{

    const {score,setScore, game, setGame}= useContext(Quizcontext);

    const restart=()=>{
        setScore(0);
        setGame("quiz")
    }
return(


    <>
   
    <div className=" w-3/6 m-auto space-y-12 mt-14">
            <h1 className="font-bold text-lg text-center">Final Score</h1>
            <div className="w-full bg-slate-200 flex flex-col items-center shadow-lg rounded-2xl h-96">
                <div className="flex w-full flex-col items-center m-auto">

            <p className="font-bold text-lg  text-gray-900 text-center">{score}/ {ethereumQuiz.length}</p>
            <button className="bg-gray-500 text-white hover:bg-neutral-500 w-1/2 p-2 rounded-md" onClick={restart}>Restart Quiz</button>
                </div>
            </div>
        </div>
    </>
)

}

export default Endscreen;