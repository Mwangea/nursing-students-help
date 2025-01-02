import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/common/Footer";
import Header from "./components/common/Header";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";
import { NotificationProvider } from "./context/NotificationContext";
import { AuthProvider } from "./context/AuthContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  // Combined list of pages that shouldn't show header/footer
  const excludedPages = [
    "/login",
    "/register", 
    "/forgot-password",
    "/dashboard",
    "/assignments",
    "/search",
    "/materials",
    "/payments",
    "/support",
    "/history",
    "/settings",
    "/help",
    "/unlocked-answers",
    "/profile",
  ];

  // Check if current path matches any excluded pages
  const shouldExcludeHeaderFooter = excludedPages.some(
    (path) => location.pathname === path || location.pathname.startsWith(path)
  );

  return (
    <div className="App">
      {!shouldExcludeHeaderFooter && <Header />}
      <main>{children}</main>
      {!shouldExcludeHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <AuthProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </AuthProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;