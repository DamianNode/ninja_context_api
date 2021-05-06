import React, { useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  
  return (
    <nav style={{backgroundColor: theme.colors.backgroundColor, color: theme.colors.textColor}}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        { isAuthenticated ? 'Logged In 😻' : 'Logged Out 😿'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
 
export default Navbar;