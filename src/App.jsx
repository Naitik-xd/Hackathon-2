import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Integrations } from './components/Integrations';
import { ServicesGrid } from './components/ServicesGrid';
import { Statistics } from './components/Statistics';
import { CaseStudies } from './components/CaseStudies';
import { ProductPlaceholder } from './components/ProductPlaceholder';
import { DashboardStats } from './components/DashboardStats';
import { SplitSection } from './components/SplitSection';
import { PricingPlaceholder } from './components/PricingPlaceholder';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  useScrollReveal();

  return (
    <div className="bg-neural-noir min-h-screen text-neural-arctic font-sans selection:bg-neural-primary selection:text-neural-noir flex flex-col w-full">
      <Nav />
      <main>
        <Hero />
        <Integrations />
        <ServicesGrid />
        <Statistics />
        <CaseStudies />
        <ProductPlaceholder />
        <DashboardStats />
        <SplitSection />
        <PricingPlaceholder />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
