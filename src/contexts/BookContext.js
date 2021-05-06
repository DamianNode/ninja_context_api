import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = ({children}) => {
    const [books, setBooks] = useState([
        { title: 'the way of kings', id: uuid() },
        { title: 'the name of the wind', id: uuid() },
        { title: 'the final empire', id: uuid() },
    ]);

    return (
        <BookContext.Provider value={{books}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;