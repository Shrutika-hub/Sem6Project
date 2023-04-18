import { useRef,useEffect } from "react";
import React from 'react'
import "./style.css";
const Login = () => {
  
const ref=useRef(null);
let container=useRef(null);
useEffect(()=>{
	container=ref.current;
},[]);

function signUp (){
	
	 container.classList.toggle("right-panel-active");
}
	
  return (
    <div>
<div className="container" ref={ref} id="container">
<div className="form-container sign-up-container">

<form action="">
	<h1>CREATE ACCOUNT</h1><br/>
	<input type="text" autocomplete="off" name="user_name" className="inputs" id="new_name" placeholder="Name"/>
	<input type="tel" autocomplete="off" name="user_phone" className="inputs" id="new_phone" placeholder="Phone Number"/>
	<input type="text" autocomplete="off" name="user_new_login" className="inputs" id="new_login" placeholder="User-Name"/>
	<input type="password" autocomplete="off" name="user_new_password" className="inputs" id="new_pass" placeholder="Password"/>
	<input type="email" autocomplete="off" name="user_new_email" className="inputs" id="new_email" placeholder="E-mail"/>
	<button className="buttons" onclick="save_register_js();">SIGN-UP</button>
	
</form>
</div>
<div className="form-container sign-in-container">
	<form action="#">
		<h1>LOG-IN</h1><br/>
	<input type="text" autocomplete="off" className="inputs" name="user_login" id="get_user_login" placeholder="User-Name"/>
	<input type="password" className="inputs" name="user_login" id="get_user_password" placeholder="Password" autocomplete="off"/><br/>
	<a href="#"  onclick="window.location.href='PasswordRecover.html'">Forgot Your Password</a>
	<button className="buttons" onclick="login_user();">Log-In</button><br/>
	<span>Links to Socials.</span>
	<div className="social-container">
		<a href="#" onclick="window.open('https://www.instagram.com/_prasad_9952/','_blank')" className="social"><i className="fa fa-instagram"></i></a>
		<a href="#" onclick="window.open('https://twitter.com/prasad_labade','_blank')" className="social"><i className="fa fa-twitter"></i></a>
		<a href="#" onclick="window.open('https://www.linkedin.com/in/prasad-labade-a55122218/','_blank')"  className="social"><i className="fa fa-linkedin"></i></a>
	</div>
	</form>
</div>
<div className="overlay-container">
	<div className="overlay">
		<div className="overlay-panel overlay-left">
			<h1>Disease Prediction </h1>
			<p>Welcome to the Disease Prediction.</p>
			<button className="ghost" id="signIn" onClick={signUp}>Sign In</button>
		</div>
		<div className="overlay-panel overlay-right">
			<h1>Disease Prediction </h1>
			<p>New to the Application ? <br/> Enter your details and start journey with us</p>
			<button className="ghost" id="signUp" onClick={signUp}>Sign Up</button>
		</div>
	</div>
</div>
</div>


</div>

  )
}

export default Login