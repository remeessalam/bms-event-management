import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../translations";

const Translate = ({
  textKey,
  values = {},
  as: Component = "span",
  ...rest
}) => {
  const { language } = useLanguage();
  const translate = useTranslation(language);

  let translatedText = translate(textKey);

  // Simple interpolation for values
  if (Object.keys(values).length > 0) {
    Object.entries(values).forEach(([key, value]) => {
      translatedText = translatedText.replace(`{{${key}}}`, value);
    });
  }

  return <Component {...rest}>{translatedText}</Component>;
};

export default Translate;
