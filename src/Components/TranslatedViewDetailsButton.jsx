import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../translations";

const TranslatedViewDetailsButton = () => {
  const { language } = useLanguage();
  const translate = useTranslation(language);

  return (
    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
      {translate("viewDetails")}
    </button>
  );
};

export default TranslatedViewDetailsButton;
