// src/App.tsx
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/common/Footer";
import Header from "./components/common/Header";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";
import { NotificationProvider } from "./context/NotificationContext";
import { AuthProvider } from "./context/AuthContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const authPages = ["/login", "/register", "/forgot-password"];
  const isAuthPage = authPages.some((path) => location.pathname.startsWith(path));

  return (
    <div className="App">
      {!isAuthPage && <Header />}
      <main>{children}</main>
      {!isAuthPage && <Footer />}
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
