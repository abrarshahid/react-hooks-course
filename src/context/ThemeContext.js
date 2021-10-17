import React, { useState, useContext } from "react"


const ThemeContext = React.createContext()
const ThemeUpdate = React.createContext()

export function useTheme(){
    return useContext(ThemeContext)
}

export function useThemeUpdate(){
    return useContext(ThemeUpdate)
}

const ThemeProvider = ({children}) => {

    const [dark, setDark] = useState(false)
    const toggleTheme = () => setDark(prevTheme => !prevTheme)
    return (
        <ThemeContext.Provider value={dark}>
            <ThemeUpdate.Provider value={toggleTheme}>
                {children}
            </ThemeUpdate.Provider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider