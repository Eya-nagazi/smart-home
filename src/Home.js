/**
 * @Date:   2021-05-06T09:36:40+01:00
 * @Last modified time: 2021-05-06T10:23:41+01:00
 */
 import React, { useEffect } from "react";
 import { useCycle } from "framer-motion";
 import IconHolder from "./IconHolder";
 import { Image1Scene, Image2Scene, Image3Scene } from "./scenes";
 const SLIDE_CHANGE_TIME_MS = 5000;
 const Home = () => { 
const [currentScene, setCurrentScene] = useCycle( Image1Scene,Image2Scene,Image3Scene);
useEffect(() => {
    const timeOut = setTimeout(setCurrentScene, SLIDE_CHANGE_TIME_MS);
    return () => clearTimeout(timeOut);
  }, [currentScene, setCurrentScene]);
    return (
        <div className="hero">
          <IconHolder icon={currentScene.icon} text={currentScene.text} />
        </div>
      );
    }
  
 export default Home;