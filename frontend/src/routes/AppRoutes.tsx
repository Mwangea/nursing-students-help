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
import { ResetPassword } from "../components/auth/ResetPassword";
import HomePage from "../dashboard/pages";
import AssignmentsPage from "../dashboard/pages/assignments";
import SearchPage from "../dashboard/pages/search";
import MaterialsPage from "../dashboard/pages/materials";
import PaymentsPage from "../dashboard/pages/payments";
import SupportPage from "../dashboard/pages/support";
import HistoryPage from "../dashboard/pages/history";
import UnlockedAnswersPage from "../dashboard/pages/unlocked-answers";
import HelpPage from "../dashboard/pages/help";
import SettingsPage from "../dashboard/pages/settings";


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
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/search-questions" element={<SearchQuiz />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/dashboard" element={<HomePage/>} />
      <Route path="/assignments" element={<AssignmentsPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/materials" element={<MaterialsPage />} />
      <Route path="/payments" element={<PaymentsPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/unlocked-answers" element={<UnlockedAnswersPage />} />
    </Routes>
  );
};

export default AppRoutes;
