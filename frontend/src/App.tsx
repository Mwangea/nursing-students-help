import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/common/Footer";
import Header from "./components/common/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">         
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
