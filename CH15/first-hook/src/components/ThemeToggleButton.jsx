import { useTheme } from '../context/ThemeContext'

function ThemeToggleButton(){

    const {isDark, toggleTheme} = useTheme();
   // console.log(1111);
    return (

            <button className='primary' onClick={toggleTheme}>{isDark ? "라이트모드" : "다크모드"}</button>

    )
}

export default ThemeToggleButton;