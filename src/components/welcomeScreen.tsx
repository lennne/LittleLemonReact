import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function WelcomeScreen () {
    //get theme state
  const [lighttheme, setLightTheme] = useState({name: "LightTheme"});
  const {themeObject, setTheme} = useTheme();

  function handleUpdateButtonName(){
       setLightTheme( (item: any) =>   ({...item, name: "Brighttheme"}) )
  }

  function handleButtonName () {
        const newName = {...lighttheme};
        newName.name = "luminancetheme";
        setLightTheme(newName);
  }

  console.log(themeObject)
    return (
        <div>
        <div className='App' style={themeObject === "light" ? {backgroundColor: "#fff" } : {backgroundColor: "#333"} }>
        <button  onClick={() => setTheme( "dark")}>
        darkTheme
      </button>
      <button  onClick={() => setTheme("light")}>
        {lighttheme.name}
      </button>
      <button onClick={handleButtonName}>
        update button name
      </button>
     </div>
        </div>
    )
}