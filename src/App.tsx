import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/route";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FullScreenBlobs from "./components/gradientBlob";


const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
    });
  }, []);

  return (
   
      <BrowserRouter>
        <div className="relative min-h-screen transition-colors duration-300">
           <FullScreenBlobs />
          <Header />

          {/* Scrollable Content */}
          <main className="relative z-10 pb-72">
            <RoutesComponent />
          </main>

          {/* Footer fixed in the back */}
          <div className="fixed bottom-0 left-0 w-full z-0">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    
  );
};

export default App;
