import { createContext, useState } from "react";

export const LanguageContext = createContext();
LanguageContext.displayName = "Language";

export const LanguageProvider = ({ children }) => {
    const [Language, SetLanguage] = useState("Portuguese");

    return (
      <LanguageContext.Provider value={{Language, SetLanguage}}>
        {children}
      </LanguageContext.Provider>
    );
  };