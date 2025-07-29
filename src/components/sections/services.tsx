import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Rocket, Briefcase, Heart, BrainCircuit, UserCheck, Star } from 'lucide-react';

const services = [
  {
    icon: <Rocket className="h-10 w-10 text-accent" />,
    title: 'Personal Growth Coaching',
    description: 'Unlock your potential, overcome limiting beliefs, and build a life filled with purpose and passion.'
  },
  {
    icon: <Briefcase className="h-10 w-10 text-accent" />,
    title: 'Career Transition',
    description: 'Navigate your career path with confidence. Find a job you love or excel in your current role.'
  },
  {
    icon: <Heart className="h-10 w-10 text-accent" />,
    title: 'Relationship Coaching',
    description: 'Improve communication and build stronger, more fulfilling connections with others.'
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-accent" />,
    title: 'Mindset & Confidence',
    description: 'Develop a resilient, positive mindset to conquer challenges and boost your self-esteem.'
  },
  {
    icon: <UserCheck className="h-10 w-10 text-accent" />,
    title: 'Leadership Development',
    description: 'Enhance your leadership skills to inspire teams and drive success in your professional life.'
  },
  {
    icon: <Star className="h-10 w-10 text-accent" />,
    title: 'Performance Coaching',
    description: 'Optimize your performance in any area of life, from sports to business, with proven strategies.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">How I Can Help You</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer a range of coaching services tailored to your unique needs and goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
