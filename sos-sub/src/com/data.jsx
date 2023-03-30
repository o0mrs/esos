/* 
Fonts Name (same as the className)
Poppins
roboto

 */
import './css/App.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import ProgressiveImage from "react-progressive-image-loading";
import {db} from "./firebase.js"
import { onValue, ref } from "firebase/database";
import Foot from './parts/footbar';
import NavBar from './parts/navbar';

const Data = ()=>{
let navigate = useNavigate();
const [tab,settab] = useState(1);
const [x,setx] = useState(0)
const [y,sety] = useState(0)
const [z,setz] = useState(0)
const [d,setd] = useState(false)


const [taa,settaa] = useState("");
// const tab = 0;
if(tab == 0){
    return(
      <>
      </>

            )
}else if(tab == 1){
     return(
  <>
  <div className='bg-[#111314] Poppins h-screen'>
<NavBar />
<div className='lg:pl-24 sm:pl-4 '>
<div className='text-left Poppins text-4xl mt-8'>
Download resouses
</div>
<div className='text-[#b7b6b6] sm:mt-3 lg:mt-7 lg:max-w-[80%]'>
All of this project resouses are open sourced (the collected data is availbe on demand you gotta contact me for more details) <br />
source code: <a className='underline underline-offset-2' href='https://github.com/o0mrs/esos'>https://github.com/o0mrs/esos</a>
</div>
</div>
<Foot />
</div>
  </>
            )
}



}
export default Data;