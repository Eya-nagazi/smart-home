/**
 * @Date:   2021-05-06T09:36:40+01:00
 * @Last modified time: 2021-05-06T10:23:41+01:00
 */
import {Link} from 'react-router-dom'
import logoIcon from "./assets/logo.png";

const  Header= () => {
    return ( 
        <nav className="navbar">
           <h1 >
         
             <img src={logoIcon}/>
              </h1>            
            <div className="links">
                <Link to="/Profile">
                   Profile 
                </Link>
                <Link to="/Contact">
                   Contact 
                </Link>
                <Link to="/">
                   Home 
                </Link>
            </div>
            </nav>

     );
}
 
export default Header;