import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [state, setState] = useState({
        isLightTheme: true, 
        lightTheme: {
            colors: {
                textColor: '#2364AA',
                backgroundColor: '#FFFFFF',
                brandPrimary: '#EA7317',
            },
            sizes: {
                sm: '12px',
                md: '18px',
                xl: '24px',
            }
        },
        darkTheme: {
            colors: {
                textColor: '#FFFFFF',
                backgroundColor: '#2364AA',
                brandPrimary: '#EA7317',
            },
            sizes: {
                sm: '12px',
                md: '18px',
                xl: '24px',
            }
        }
    });

    const toggleTheme = () => {
        setState({...state, isLightTheme: !state.isLightTheme});
    }

    return (
        <ThemeContext.Provider value={{...state, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;