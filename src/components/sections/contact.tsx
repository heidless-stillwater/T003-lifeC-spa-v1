import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Contact Us</Badge>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or need a quote? Fill out the form below or use our contact details.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Our Location</h3>
                    <p className="text-muted-foreground">Woodberry Down, London N4 2TG</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">jon@test.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">8888 567 890</p>
                  </div>
                </div>
            </div>
            <div className="mt-8">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.572123512133!2d-0.09065638422896568!3d51.56238697964426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c10b429d3b5%3A0x800586b62947158a!2sWoodberry%20Down%2C%20London%20N4%202TG%2C%20UK!5e0!3m2!1sen!2sus!4v1689269785596!5m2!1sen!2sus"
                  width="100%"
                  height="500"
                  style={{ border:0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                ></iframe>
            </div>
          </div>
          <div className="h-full">
            <Card className="shadow-lg h-full flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send Us A Message</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <form className="space-y-4 flex flex-col flex-grow">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" aria-label="Your Name" />
                    <Input type="email" placeholder="Your Email" aria-label="Your Email" />
                  </div>
                  <Input placeholder="Subject" aria-label="Subject" />
                  <Textarea placeholder="Your Message" rows={5} aria-label="Your Message" className="flex-grow"/>
                  <Button type="submit" size="lg" className="w-full mt-auto">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
