
import {  useState, useContext, useEffect} from "react";
import Quiz from "./components/Quiz";
import Navbar from "./components/Navbar"
import { Quizcontext } from "./context/context";
import Startscreen from "./components/Startscreen";
import Endscreen from "./components/Endscreen";


const App =() =>{
  const [game, setGame]= useState("start");
  const [score, setScore]= useState(0);
 
 
  return (
    <>
    <Navbar/>
    <div className="container m-auto">


      <Quizcontext.Provider value={{game, setGame, score, setScore}}>
      {game === "start" && <Startscreen/>}
      {game === "quiz" && <Quiz/>}
      {game === "end" && <Endscreen/>}
      </Quizcontext.Provider>
    </div>
       
    </>
  )
}

export default App
