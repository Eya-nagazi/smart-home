/**
 * @Date:   2021-05-06T09:36:40+01:00
 * @Last modified time: 2021-05-06T10:23:41+01:00
 */
 import {Link} from 'react-router-dom'
 import SocialFollow from "./SocialFollow"
 const Contact = () => {
     return ( 
         
        <h2>
            <h3 className="smalltitle">What is smart Home?</h3>
            <p className="content">
            A smart home refers to a convenient home
             setup where appliances and devices can be
              automatically controlled remotely from anywhere
               with an internet connection using a mobile or
                other networked device. Devices in a smart home 
                are interconnected through the internet, 
                allowing the user to control functions such 
                as security access to the home, temperature, 
                lighting, and a home theater remotely.

            </p>
            <SocialFollow />
        </h2>  
       
      
      );
 }
  
 export default Contact;
