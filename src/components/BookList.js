import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { books } = useContext(BookContext);
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext)
  const theme = isLightTheme ? lightTheme : darkTheme;
    return ( 
      <div className="book-list" style={{backgroundColor: theme.colors.backgroundColor, color: theme.colors.textColor}}>
        <ul>
          {books.map((book) => <li key={book.id} style={{background: theme.colors.brandPrimary}}>{book.title}</li>)}
        </ul>
      </div>
    );
}
 
export default BookList;