import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import SongList from './components/SongList';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <ThemeToggle />
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider> 
      <SongList />
    </div>
  );
}

export default App;
