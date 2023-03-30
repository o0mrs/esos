
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ()=>{
  const [a, seta] = useState(1);
  const [pfp, setpfp] = useState('./logo.png')
  let navigate = useNavigate();
    return(
      <>
      <div className="navbar bg-[#111314]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
        <li onClick={()=>{navigate('/',{replace:false})}}><a>Homepage</a></li>
        {/* <li><a>Portfolio</a></li> */}
        <li onClick={()=>{navigate('/mo',{replace:false})}}><a>Live data</a></li>
        <li onClick={()=>{navigate('/data',{replace:false})}}><a>Get resouses</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>About</a></li>
      </ul>
    </div>
  </div>
  <div  className="navbar-center">
    <a onClick={()=>{navigate('/',{replace:false})}} className="btn btn-ghost normal-case Poppins text-xl">ESOS</a>
  </div>
  <div className="navbar-end">

    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
      </>
    

    )
}
export default NavBar;