import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/route";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <RoutesComponent />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;