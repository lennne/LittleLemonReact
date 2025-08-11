import { useTheme } from "../context/ThemeContext";

export default function WelcomeScreen () {
    //get theme state
  const {themeObject, setTheme} = useTheme();
  console.log(themeObject)
    return (
        <div>
        <div className='App' style={themeObject === "light" ? {backgroundColor: "#fff" } : {backgroundColor: "#333"} }>
        <button style={{color: "black"}} onClick={() => setTheme( "dark")}>
        darkTheme
      </button>
      <button style={{color: "black"}} onClick={() => setTheme("light")}>
        light theme
      </button>
     </div>
        </div>
    )
}