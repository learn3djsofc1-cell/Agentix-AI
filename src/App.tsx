/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Background } from './components/Background';
import { StatsSection } from './components/StatsSection';
import { CoreInfrastructure } from './components/CoreInfrastructure';
import { FeatureCards } from './components/FeatureCards';
import { HowItWorks } from './components/HowItWorks';
import { CorePrinciples } from './components/CorePrinciples';
import { Environments } from './components/Environments';
import { DeveloperPreview } from './components/DeveloperPreview';
import { FooterCTA } from './components/FooterCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden relative selection:bg-[#34d399] selection:text-black">
      <Background />
      <div className="relative z-10 flex flex-col min-h-screen">
        <TopBanner />
        <Navbar />
        <main className="flex-grow flex flex-col items-center w-full">
          <Hero />
          <StatsSection />
          <CoreInfrastructure />
          <FeatureCards />
          <HowItWorks />
          <CorePrinciples />
          <Environments />
          <DeveloperPreview />
          <FooterCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
