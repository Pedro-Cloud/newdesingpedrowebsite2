/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Feature from './components/Feature';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-dark">
      <Navbar />
      <Hero />
      <Mission />
      <Feature />
      <Pricing />
      <Newsletter />
      <Footer />
    </div>
  );
}
