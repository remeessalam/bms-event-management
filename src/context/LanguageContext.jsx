import React, { createContext, useState, useContext, useEffect } from "react";

// Create the language context
const LanguageContext = createContext();

// Create a custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Get the saved language from localStorage or default to English
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "English";
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Function to change the language
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  // Value to be provided to consumers
  const value = {
    language,
    changeLanguage,
    isEnglish: language === "English",
    isMalayalam: language === "Malayalam",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
