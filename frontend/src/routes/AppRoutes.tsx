import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { TermsOfService } from "../legal/terms-of-service";
import { RefundPolicy } from "../legal/refund-policy";

import { Contact } from "../pages/Contact";
import PrivacyPolicy from "../legal/privacy-policy";


import FAQ from "../pages/FAQ";
import { Register } from "../components/auth/Register";
import { Login } from "../components/auth/Login";
import { ForgotPassword } from "../components/auth/ForgotPassword";
import SearchQuiz from "../pages/SearchQuiz";
import Subjects from "../pages/Subjects";

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
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/search-questions" element={<SearchQuiz />} />
      <Route path="/subjects" element={<Subjects />} />
    </Routes>
  );
};

export default AppRoutes;
