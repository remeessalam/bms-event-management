import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "../Components/ScrollToTop";
import { LanguageProvider } from "../context/LanguageContext";
import { Toaster } from "react-hot-toast";
// import "react-toastify/dist/ReactToastify.css";

const AppLayout = () => {
  return (
    <LanguageProvider>
      <Toaster
        position="top-bottom"
        toastOptions={{
          style: {
            background: "#010C2A",
            color: "#ffffff",
          },
        }}
      />
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
