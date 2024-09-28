import { useContext } from "react";
import { Quizcontext } from "../context/context";

const Startscreen =()=>{
const {game, setGame}= useContext(Quizcontext);

    return(
        <>
        <div className=" w-3/6 m-auto space-y-12 mt-14">
            <h1 className="font-bold text-lg text-center">Start Quiz</h1>
            <div className="w-full bg-slate-200 items-center flex shadow-lg rounded-2xl h-96"><button className="bg-gray-500 m-auto text-white hover:bg-neutral-500 w-1/2 p-2 rounded-md" onClick={()=>setGame("quiz")}>Start</button></div>
        </div>
        </>
    )
}

export default Startscreen;