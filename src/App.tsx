import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Security from './components/Security';
import Network from './components/Network';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-brand-cream dark:bg-brand-navy text-slate-900 dark:text-white transition-colors duration-500">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Security />
          <Network />
          <Location />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
