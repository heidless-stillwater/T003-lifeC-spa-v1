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
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    name: "Alex Johnson",
    title: "Software Engineer",
    avatar: "AJ",
    rating: 3,
    image: "https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/female-black-headshot-0.jpg",
    text: "Working with CS Fitness has been a game-changer. The personalized plan was easy to follow and incredibly effective. I've never felt stronger or more confident!",
  },
  {
    name: "Samantha Lee",
    title: "Marketing Manager",
    avatar: "SL",
    rating: 3,
    image: "https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/female-asian-headshot-0.jpg",
    text: "I found a new sense of purpose and clarity. The guidance was invaluable in my personal growth journey.",
  },
  {
    name: "The Garcia Family",
    title: "Clients",
    avatar: "GF",
    rating: 3,
    image: "https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/family-portait.jpg",
    text: "The coaching sessions helped our family communicate better and resolve conflicts constructively. Highly recommended.",
  },
  {
    name: "The Garcia Family",
    title: "Clients",
    avatar: "GF",
    rating: 3,
    image: "https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/family-portait.jpg",
    text: "The coaching sessions helped our family communicate better and resolve conflicts constructively. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Success Stories from Our Clients</h2>
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
                          <Star key={i} className={`h-5 w-5 ${i < (testimonial.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
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
