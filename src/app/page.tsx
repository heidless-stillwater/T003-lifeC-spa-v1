import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Cta from '@/components/sections/cta';
import AiProTips from '@/components/sections/ai-pro-tips';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Cta />
        <AiProTips />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
