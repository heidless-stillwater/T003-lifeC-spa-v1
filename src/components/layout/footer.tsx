import Link from 'next/link';
import { HeartHandshake, Github, Twitter, Linkedin, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section with 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: About Us */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <HeartHandshake className="h-8 w-8 text-accent" />
              <span className="font-headline text-2xl font-bold text-foreground">Best Day Coaching</span>
            </Link>
            <p className="text-muted-foreground text-base max-w-md">
              Helping you unlock your full potential and live your best life, one day at a time.
            </p>
          </div>
          
          {/* Column 2: Contact & Legal */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold text-foreground">Contact & Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>Woodberry Down, London N4 2TG</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:jon@test.com" className="hover:text-foreground">jon@test.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:8888567890" className="hover:text-foreground">8888 567 890</a>
              </li>
            </ul>
             <ul className="space-y-2 text-muted-foreground pt-2">
                 <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
                 <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Stay Updated */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground">Get the latest tips and news from us.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button type="submit" size="icon" aria-label="Subscribe">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>

        </div>

        {/* Bottom section with copyright and social media */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">&copy; {currentYear} Best Day Coaching. All rights reserved.</p>
          </div>
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
        </div>
      </div>
    </footer>
  );
}