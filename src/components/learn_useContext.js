import { useTheme, useThemeUpdate } from '../context/ThemeContext'

const LearnContext = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        margin: '2rem',
        padding: '2rem'
    }
    return (
        <div>
            <button onClick={toggleTheme}>Toggle Theme </button>
            <div style={themeStyles}>Functional Theme!</div>
        </div>
    )

}
export default LearnContext