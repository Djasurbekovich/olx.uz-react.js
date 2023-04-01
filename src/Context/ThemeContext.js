import React, { createContext, useState } from 'react';

const ContextColor = createContext();

const ThemeContext = ({children}) => {

    const [theme, setTheme] = useState(false);

    return (
        <ContextColor.Provider value={{ theme, setTheme }}>
            {children}
        </ContextColor.Provider>
    );
}

export { ThemeContext, ContextColor };