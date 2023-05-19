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

const Mo = ()=>{
let navigate = useNavigate();
const [tab,settab] = useState(1);
const [x,setx] = useState(0)
const [y,sety] = useState(0)
const [z,setz] = useState(0)
const [d,setd] = useState(false)
useEffect(() => {
    const query = ref(db, "a");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      // console.log(snapshot.val())
      if (snapshot.val()) {
        // console.log(JSON.parse(data))
        setx(snapshot.val().x)
        sety(snapshot.val().y)
        setz(snapshot.val().z)
        setd(snapshot.val().earth)
      }else{
        console.log('doesnt')
      }
    });
  }, []);

const [taa,settaa] = useState("");
// const tab = 0;
if(tab == 0){
    return(
      
<div className='bg-[#111314 ] Poppins h-screen'>
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
            )
}else if(tab == 1){
     return(
  <>
  <div className='bg-[#111314]  Poppins h-screen'>
<NavBar />
<div className='text-6xl place-items-center mt-32 grid grid-cols-3'>
    <div>
        x: {x}
    </div>
    <div>
        y: {y}
    </div>
    <div>
        z: {z}
    </div>

</div>
<div className='text-center text-6xl mt-32'>
{d &&(
    <>THER'S AN EARTQUAKE</>
)}
{!d &&(
    <>SAFE</>
)}
</div>
<Foot />
</div>
  </>
            )
}



}
export default Mo;