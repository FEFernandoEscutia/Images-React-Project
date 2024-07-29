//** 1ST STEP, CREATE THE CONTEXT */
import { createContext, useContext, useState, useEffect } from "react";

//!! Creating the Global Context

//1.- It has got to start with capitals
const AppContext = createContext();

//2.- Set up the Provider (This will have got to wrap the app)

export const AppProvider = ({ children }) => {
  const [isDarkTheme, SetIsDarkTheme] = useState(false);
  const[searchTerm,  setSearchTerm ]= useState('Dragon')

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    SetIsDarkTheme(newDarkTheme);
    //1st approach
    // const body = document.querySelector('body')
    // body.classList.toggle("dark-theme", newDarkTheme)
    //2nd approach
    document.body.classList.toggle("dark-theme", newDarkTheme)
  };

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

//3.- create the custom Hook (This will contain all the values to import in every component)

export const useGlobalContext = () => useContext(AppContext);
