import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/homepage-hero.jpg"
          alt="Inspiring landscape"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
          data-ai-hint="inspiring landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-4">
            Your <span style={{color: '#55a8e3'}}>Best</span> Life Starts <span style={{color: '#55a8e3'}}>Today</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Guidance and support to help you navigate life's challenges and achieve your dreams. Let's start your journey together.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild className="text-[17px]">
              <Link href="#contact">Book A Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-[17px]">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
