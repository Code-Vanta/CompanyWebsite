import React, { useContext } from "react";
import { createContext,useState } from "react";

const DarkContext = createContext()
const ToggleContext = createContext()
export function useDarkContext(){
  useContext(DarkContext)
}
export function useToggleContext(){
  useContext(ToggleContext)
}
function DarkIt ({children}) {
const [isDark, setIsDark] = useState();

    const toggleDark = () => {
      setIsDark(!isDark);
    };

    return (
      <DarkContext.Provider value={isDark}>
        <ToggleContext.Provider value={toggleDark}>
            {children}
        </ToggleContext.Provider>
      </DarkContext.Provider>
    ); 
}

export default DarkIt;