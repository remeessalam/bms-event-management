import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "../Components/ScrollToTop";
import { LanguageProvider } from "../context/LanguageContext";

const AppLayout = () => {
  return (
    <LanguageProvider>
      <div>
        <Header />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default AppLayout;
