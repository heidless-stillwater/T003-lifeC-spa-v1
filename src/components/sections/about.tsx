import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Your Coach</h2>
            <p className="text-muted-foreground mb-4 text-lg">
              Hello! I'm Alex, a certified life coach dedicated to helping individuals like you find clarity, purpose, and fulfillment. My approach is rooted in empathy, positive psychology, and actionable strategies.
            </p>
            <p className="text-muted-foreground mb-6">
              With over a decade of experience, I specialize in career transitions, personal growth, and building resilient mindsets. I believe everyone has the power to create a life they love, and my mission is to provide the tools and support to make that a reality.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Card className="overflow-hidden rounded-xl shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/600x600.png"
                  alt="Life Coach Alex"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  data-ai-hint="professional coach"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
