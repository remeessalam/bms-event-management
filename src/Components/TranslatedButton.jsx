import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../translations";

const TranslatedButton = ({ translationKey, className, onClick, icon }) => {
  const { language } = useLanguage();
  const translate = useTranslation(language);

  return (
    <button className={className} onClick={onClick}>
      {icon && <i className={icon + " mr-2"}></i>}
      {translate(translationKey)}
    </button>
  );
};

export default TranslatedButton;
