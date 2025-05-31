import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./Layout/AppLayout";
import CateringServicePage from "./pages/CateringServicePage";
import CateringServiceDetailsPage from "./pages/CateringServiceDetailsPage";
import DecorationPage from "./pages/DecorationPage";
import DecorationDetailsPage from "./pages/DecorationDetailsPage";
import PhotographyServicesPage from "./pages/PhotographyServicesPage";
import PhotographyServiceDetailsPage from "./pages/PhotographyServiceDetailsPage";
import SoundAndDjServicePage from "./pages/SoundAndDjServicePage";
import SoundAndDjServiceDetailsPage from "./pages/SoundAndDjServiceDetailsPage";
import VenuesPage from "./pages/VenuesPage";
import InvitationPage from "./pages/InvitationPage";
import InvitationDetailsPage from "./pages/InvitationDetailsPage";
import AdminHomePage from "./AdminPages/AdminHomePage";
import VendorHomePage from "./VendorPages/VendorHomePage";
import AuthPage from "./pages/AuthPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/catering-service",
        element: <CateringServicePage />,
      },
      {
        path: "/catering-service/:id",
        element: <CateringServiceDetailsPage />,
      },
      { path: "/decorations", element: <DecorationPage /> },
      { path: "/decorations/:id", element: <DecorationDetailsPage /> },
      { path: "/photography-services", element: <PhotographyServicesPage /> },
      {
        path: "/photography-services/:id",
        element: <PhotographyServiceDetailsPage />,
      },
      { path: "/sound-and-dj-services", element: <SoundAndDjServicePage /> },
      {
        path: "/sound-and-dj-services/:id",
        element: <SoundAndDjServiceDetailsPage />,
      },
      { path: "/venues", element: <VenuesPage /> },

      { path: "/invitation", element: <InvitationPage /> },
      { path: "/invitation/:id", element: <InvitationDetailsPage /> },
    ],
  },
  {
    path: "/login",
    element: <AuthPage type="login" />,
  },
  {
    path: "/signup",
    element: <AuthPage type="signup" />,
  },
  { path: "/admin", element: <AdminHomePage /> },
  { path: "/vendor", element: <VendorHomePage /> },
]);
export default AppRouter;
