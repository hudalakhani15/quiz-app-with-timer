import logo from './logo.svg';
import './App.css';
import Timer from './component/timer';
import { useState } from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { BedroomChildRounded } from '@mui/icons-material';
import Chip from '@mui/material/Chip';
function App() {
  let [score,setScore] = useState(0)
  let [questions,setQuestions] = useState([
      {
        question: "Html Stands For _______________________",
        options: [
          "Hyper Text Makeup Language",
          "html",
          "Case Cading Style Sheet",
          "Hypertext markup language",
        ],
        correctAns: "Hypertext markup language",
      },
      {
        question: "Css Stands For _______________________",
        options: [
          "Casecading Style Sheet",
          "Java",
          "Ram",
          "Hypertext markup language",
        ],
        correctAns: "Casecading Style Sheet",
      },
      {
        question: "Js Stands For _______________________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
      },
      {
        question: "Dom Stands For _______________________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
      },
      {
        question: "Ram Stands For _______________________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
      },
      {
        question: "Rom Stands For _______________________",
        options: [
          "Hyper Text Markup Language",
          "html",
          "HTml",
          "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
      },
    ]);
    let [indexNumber,setIndexNumber] = useState(0)
    let[showResult,setShowResult] = useState(false)
   
  let checkAnswer = (userAnswer,correctAnswer)=>{
    console.log(userAnswer,correctAnswer);
    if(userAnswer == correctAnswer){
      setScore(score + 1)
      console.log(score);
    }
    if(indexNumber + 1 == questions.length){
      setShowResult(true)

    }else
    {

      setIndexNumber(indexNumber + 1)
    }
    
  }
function timeover(){
   setShowResult(true)
     
}
    




  return (
    <div className="App">
      <h1 className='styling'>Quiz App</h1>

    {showResult?<h1 className='styling' >Your score is {score}</h1>:
     <Box>
     <Box container className="styling" sx={{padding : 1}}>
        <Typography className='styling' variant='h5'>
          Question {indexNumber + 1}/{questions.length}

        </Typography>
        
      </Box>
      <Box sx={{padding:1}}>
        <Typography sx={{
          backgroundColor : 'pink',
          color:"purple",
          
          padding : "10px" 
        }} variant='h4'>{questions[indexNumber].question}?</Typography>
        
      </Box>
      <Box>
        <Grid container>
          {questions[indexNumber].options.map((e,i)=>
          <Grid key={i} item md={6}>
            <Chip className='design' onClick={()=>checkAnswer(e,questions[indexNumber].correctAns)} sx={{
              padding: "10px",
              marginTop : "5px",
              paddingBlockEnd : "10px",
              backgroundColor : "white",
              color: "purple",
              fontWeight: "bold",
            }} label={e} />

          </Grid>)}

        </Grid>
      </Box>

     <Timer name = {timeover}   className="container" score={score}/>
     </Box>}
    </div>
  );
}

export default App;