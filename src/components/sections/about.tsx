import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Badge variant="outline" className="mb-4">Meet Your Coach</Badge>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">Your Partner in Personal Transformation</h2>
            <p className="text-muted-foreground mb-4 text-lg">
              Hello! I'm Alex, a certified life coach dedicated to helping individuals like you find clarity, purpose, and fulfillment. My approach is rooted in empathy, positive psychology, and actionable strategies.
            </p>
            <p className="text-muted-foreground mb-6">
              With over a decade of experience, I specialize in career transitions, personal growth, and building resilient mindsets. I believe everyone has the power to create a life they love, and my mission is to provide the tools and support to make that a reality.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/female-black-headshot-1.webp"
              alt="Life Coach Alex"
              width={400}
              height={400}
              className="rounded-full object-cover aspect-square shadow-lg"
              data-ai-hint="professional coach"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
