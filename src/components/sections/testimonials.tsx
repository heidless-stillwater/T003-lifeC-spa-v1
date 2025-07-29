import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah L.",
    title: "Marketing Director",
    avatar: "SL",
    image: "https://placehold.co/100x100.png",
    text: "Working with Best Day Coaching was a game-changer for my career. I gained so much clarity and confidence, which led to a promotion within six months. Truly invaluable!",
  },
  {
    name: "Michael B.",
    title: "Entrepreneur",
    avatar: "MB",
    image: "https://placehold.co/100x100.png",
    text: "I was feeling stuck and unmotivated. The coaching sessions helped me redefine my goals and create an actionable plan. My business has never been better.",
  },
  {
    name: "Jessica T.",
    title: "Freelance Writer",
    avatar: "JT",
    image: "https://placehold.co/100x100.png",
    text: "The guidance I received helped me overcome my creative blocks and establish a work-life balance I thought was impossible. I'm happier and more productive than ever.",
  },
  {
    name: "David C.",
    title: "Software Engineer",
    avatar: "DC",
    image: "https://placehold.co/100x100.png",
    text: "I learned how to communicate more effectively and lead my team with empathy. The impact on my professional relationships has been profound.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Success Stories</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            See what my clients are saying about their transformation journey.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between p-6 shadow-md">
                    <CardContent className="p-0 flex-1">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                    </CardContent>
                    <div className="flex items-center gap-4 mt-auto">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="person portrait" />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
