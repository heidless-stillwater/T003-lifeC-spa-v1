import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Cta() {
  return (
    <section id="cta" className="bg-accent text-accent-foreground py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-lg mb-8 text-accent-foreground/80">
            Don't wait another day to start your journey towards a more fulfilling and successful life. A complimentary consultation is the first step.
          </p>
          <Button size="lg" variant="outline" className="bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent border-accent-foreground/50 hover:border-accent-foreground text-[17px]" asChild>
            <Link href="#contact">Claim Your Free Session</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
