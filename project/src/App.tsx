import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Carousel from './components/home/Carousel';
import InternetPlans from './components/home/InternetPlans';
import About from './components/home/About';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <section id="inicio">
          <Carousel />
        </section>
        <InternetPlans />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;