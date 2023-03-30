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
      {/* <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a> */}
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - All right reserved by omar</p>
  </div>
</footer>
    )
}
export default Foot