import englishTranslations from "./en";
import malayalamTranslations from "./ml";

// Function to get translations based on the current language
export const getTranslation = (key, language) => {
  const translations =
    language === "Malayalam" ? malayalamTranslations : englishTranslations;
  return translations[key] || key; // Return the key itself if translation not found
};

// Custom hook to use translations with the language context
export const useTranslation = (language) => {
  return (key) => getTranslation(key, language);
};
