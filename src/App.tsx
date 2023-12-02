import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Songs } from "./components/Songs";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Songs />
        <Footer />
    </div>
  );
};

export default App;
