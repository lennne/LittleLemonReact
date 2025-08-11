import { createContext, ReactNode, useContext, useState } from "react"

type ThemeProviderProps = {
    theme: string;
    setTheme?: () => void;
}

const ThemeContext = createContext<any>(undefined);

export const ThemeProvider = ({children}: {children:ReactNode}) => {
    const [themeObject, setThemeObject] = useState("light")

    return  (
        <ThemeContext.Provider value={{themeObject, setTheme: setThemeObject}}>
             {children}
        </ThemeContext.Provider>
        )
    
}

export const useTheme = () => useContext(ThemeContext);