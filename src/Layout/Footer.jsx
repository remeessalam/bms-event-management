import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../translations";

const Footer = () => {
  const { language } = useLanguage();
  const translate = useTranslation(language);

  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-500">
              &copy; 2025 EventPro. {translate("allRightsReserved")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
