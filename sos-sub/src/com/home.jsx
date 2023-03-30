/* 
Fonts Name (same as the className)
Poppins
roboto

 */
import './css/App.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import ProgressiveImage from "react-progressive-image-loading";
import {requestForToken} from "./firebase.js"
import NavBar from './parts/navbar';
import Foot from './parts/footbar';
const Home = ()=>{
let navigate = useNavigate();
const [tab,settab] = useState(0);
const [taa,settaa] = useState("");
// const tab = 0;
if(tab == 0){
    return(
      
<>
<div className='bg-[#111314] lg:hidden Poppins h-screen'>
<NavBar />
<div>
  <div>
    {/* img  */}
    <img src='main2.png' className='lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 '/>
  </div>
  <div className='mt-12 text-center'>
...
  </div>

  <div className='bottom-0 fixed text-center w-screen px-4 pb-14'>
    {/* button */}
    <div className='mt-16'>
    <div className=' text-[#8BCCD0] leading-relaxed /Poppins font-bdold px-3 text-center text-2xl'>
    {/* disc */}
    Let's save lives from the impact of earthquakes.
  </div>
    </div>
<div onClick={()=>{settab(1)}} className='h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]'>
  Get started
  </div>
  </div>
</div>
{/* <Foot /> */}
</div>


<div className='bg-[#111314] sm:hidden lg:block Poppins h-screen'>
<NavBar />
<div>
  <div className='grid grid-cols-2'>
    {/* img  */}
    <div>
    <div className=' text-[#8BCCD0] leading-relaxed mt-32 Poppins font-bdold px-3 text-left pl-10 text-5xl'>
    Let's save lives from the <br /> impact of earthquakes.
      <div className=' text-[#b3b3b3] leading-relaxed Poppins  text-lg font-bdold px-2 max-w-[90%] mt-5 text-left text-md'>
    {/* disc */}
    We will send you a notification when an earthquake happens, depending on the seismic focus you might get around 30 seconds to runaway
  </div>
    <div>
    <div onClick={()=>{requestForToken()}}  className='h-14 cursor-pointer text-white max-w-[90%] mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]'>
    Enable
  </div>
    </div>
  </div>
    </div>
<div>
<img src='main2.png' className='lg:max-w-[48vw] sm:max-w-screen px-3 mt-12 '/>
  
  </div> 
   </div>
  {/* <div className='mt-12 text-center'>
...
  </div> */}

  {/* <div className='bottom-0 fixed text-center w-screen px-4 pb-14'>
    <div className='mt-16'>
    <div className=' text-[#8BCCD0] leading-relaxed /Poppins font-bdold px-3 text-center text-2xl'>
    Let's save lives from the impact of earthquakes.
  </div>
    </div>
<div onClick={()=>{settab(1)}} className='h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]'>
  Get started
  </div>
  </div> */}
</div>
</div>
<Foot />

</>
            )
}else if(tab == 1){
     return(
     
<div className='bg-[#111314] Poppins h-screen'>
<NavBar />
<div>
  <div>
    {/* img  */}
    <img src='main.png' className='lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 '/>
  </div>
  <div className=' text-[#fff] leading-relaxed Poppins font-bdold px-4 mt-3 text-left text-md'>
    {/* disc */}
    We will send you a notification when an earthquake happens, depending on the seismic focus you might get around 30 seconds to runaway
  </div>
{taa}
  <div className='bottom-0 fixed text-center w-screen px-4 pb-14'>
    {/* button */}

<div onClick={()=>{requestForToken()}} className='h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]'>
  Enable
  </div>
  </div>
</div>
{/* <Foot /> */}
</div>
            )
}



}
export default Home;