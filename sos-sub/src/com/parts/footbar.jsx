import {React} from 'react';
const Foot = ()=>{
    return(
<footer className="footer footer-center p-10 bg-[#111314] pt-[50vh]  text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
   <a><i class="fa-brands cursor-pointer fa-github-alt text-3xl"></i></a> 
          <a><i class="fa-brands cursor-pointer fa-twitter text-3xl"></i></a> 
    </div>
  </div> 
  <div> 
    <p>Copyright © 2023 - All right reserved by omar</p>
  </div>
</footer>
    )
}
export default Foot