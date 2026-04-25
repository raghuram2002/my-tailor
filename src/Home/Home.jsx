import React from "react";
import TopNav from "./TopNav/TopNav";
import HeroSection from "./bodyContainer/HeroSection";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <TopNav />

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <HeroSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
