import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// In here we use Context Consumer technique
const Navbar = () => {
  return (
    <ThemeContext.Consumer>
      {context => {
        const { isLightTheme, lightTheme, darkTheme } = context
        const theme = isLightTheme ? lightTheme : darkTheme;
        return (
          <nav style={{backgroundColor: theme.colors.backgroundColor, color: theme.colors.textColor}}>
            <h1>Context App</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        )
      }}
    </ThemeContext.Consumer> 
  );
}
 
export default Navbar;