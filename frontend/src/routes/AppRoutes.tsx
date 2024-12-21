import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { TermsOfService } from "../legal/terms-of-service";
import { RefundPolicy } from "../legal/refund-policy";

import { Contact } from "../pages/Contact";
import PrivacyPolicy from "../legal/privacy-policy";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import FAQ from "../pages/FAQ";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/refund-policy" element={<RefundPolicy/>} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
