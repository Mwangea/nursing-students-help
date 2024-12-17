import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { TermsOfService } from "../legal/terms-of-service";
import { RefundPolicy } from "../legal/refund-policy";
import { FAQ } from "../pages/FAQ";
import { Contact } from "../pages/Contact";
import PrivacyPolicy from "../legal/privacy-policy";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/refund-policy" element={<RefundPolicy/>} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
