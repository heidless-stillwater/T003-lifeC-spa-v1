import Link from 'next/link';
import { HeartHandshake, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <HeartHandshake className="h-8 w-8 text-accent" />
              <span className="font-headline text-2xl font-bold text-foreground">Best Day Coaching</span>
            </Link>
            <p className="text-muted-foreground text-base max-w-md">
              Helping you unlock your full potential and live your best life, one day at a time.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://this_site.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://this_site.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://this_site.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
             <div className="mt-4 text-muted-foreground">
                <p>Woodberry Down, London N4 2TG</p>
                <p>jon@test.com</p>
                <p>8888 567 890</p>
             </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Best Day Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
