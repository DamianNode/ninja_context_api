import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

// In here we use Context Consumer technique
const Navbar = () => {
  return (
    <AuthContext.Consumer>{
      authContext => (
          <ThemeContext.Consumer>
            {themeContext => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, lightTheme, darkTheme } = themeContext;
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
            }}
          </ThemeContext.Consumer> 
        )
      }
    </AuthContext.Consumer>
  );
}
 
export default Navbar;