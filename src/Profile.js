/**
 * @Date:   2021-05-06T09:36:40+01:00
 * @Last modified time: 2021-05-06T10:23:41+01:00
 */
 import {Link} from 'react-router-dom'
 const Profile = () => {
     return ( 
         <div className="Profile">
             
             <div>   <Link to="/MyProfile">
                   My profile 
                </Link></div>
                <div> <Link to="/Profile/Login2">
                   Login
                </Link></div>
               <div> <Link to="/SignUp">
                  SignUp
                </Link></div>

         </div>
      );
 }
  
 export default Profile;