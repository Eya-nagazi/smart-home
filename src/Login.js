
 import React,{useState} from "react";
 import logoIcon from "./assets/logo.png";

 const Login = () => {
     const [Email, setEmail] = useState("");
     const [Password, setPassword] = useState("");
     return ( 
<div className="Login">
<div><img src={logoIcon}/>  </div>
 <view className="InputView">
<input className="LoginInput" type="Email" placeholder="Email"
placeholderTextColor="#003f5c" onchangetexte={(email)=>
setEmail(email)} /> 
</view>
<div><view className="InputView">
<input className="LoginInput" type="text" placeholder="Password"
placeholderTextColor="#003f5c" onchangetexte={(Password)=>setPassword(Password)}
 />
 </view>
 </div>

 <view className="InputView">
 <button>LOG</button>
 </view>

 </div>


   
    
    
    );
 }
  
 export default Login;