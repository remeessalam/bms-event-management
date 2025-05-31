import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../translations";

const Header = () => {
  const { language, changeLanguage } = useLanguage();
  const translate = useTranslation(language);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const selectLanguage = (newLanguage) => {
    changeLanguage(newLanguage);
    setShowLanguageDropdown(false);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">EventPro</h1>
          </div>
          {/* Right side navigation */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center text-gray-700 hover:text-indigo-600 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-globe mr-2"></i>
                <span>{language}</span>
                <i
                  className={`fas fa-chevron-down ml-1 transition-transform ${
                    showLanguageDropdown ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <button
                    onClick={() => selectLanguage("English")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    English
                  </button>
                  <button
                    onClick={() => selectLanguage("Malayalam")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Malayalam
                  </button>
                </div>
              )}
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer">
              <i className="fas fa-sign-in-alt mr-2"></i>
              {translate("signIn")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
