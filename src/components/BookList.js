import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// In here we use useContext hook
const BookList = () => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext)
  const theme = isLightTheme ? lightTheme : darkTheme;
    return ( 
      <div className="book-list" style={{backgroundColor: theme.colors.backgroundColor, color: theme.colors.textColor}}>
        <ul>
          <li style={{background: theme.colors.brandPrimary}}>the way of kings</li>
          <li style={{background: theme.colors.brandPrimary}}>the name of the wind</li>
          <li style={{background: theme.colors.brandPrimary}}>the final empire</li>
        </ul>
      </div>
    );
}
 
export default BookList;