import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/route";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />

          {/* Scrollable Content */}
          <main className="relative z-10 overflow-y-auto max-h-screen pb-80">
            <RoutesComponent />
          </main>

          {/* Footer fixed in the back */}
          <div className="fixed bottom-0 left-0 w-full z-0">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
