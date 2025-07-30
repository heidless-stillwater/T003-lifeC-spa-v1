"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Loader2 } from 'lucide-react';
import { generateAiProTip, type GenerateAiProTipOutput } from '@/ai/flows/generate-ai-pro-tip';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AiProTips() {
  const [tip, setTip] = useState<GenerateAiProTipOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetTip = async () => {
    setIsLoading(true);
    setError(null);
    setTip(null);
    try {
      const result = await generateAiProTip();
      setTip(result);
    } catch (err) {
      setError('Sorry, we couldn\'t generate a tip right now. Please try again later.');
      console.error(err);
    }
    setIsLoading(false);
  };

  return (
    <section id="ai-pro-tips" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">AI-Powered Pro Tips</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get an instant, AI-generated insight to inspire your day. Click the button for a unique life coaching tip.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Button size="lg" onClick={handleGetTip} disabled={isLoading} className="text-[17px]">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              'Get a Pro Tip'
            )}
          </Button>
          
          <div className="w-full max-w-2xl min-h-[150px]">
            {tip && (
              <Card className="w-full text-center shadow-lg animate-in fade-in-50 duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 font-headline text-xl">
                    <Lightbulb className="h-6 w-6 text-accent" />
                    Here's a tip for you
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg font-medium">{tip.tip}</p>
                  {tip.additionalInfo && (
                    <p className="text-muted-foreground text-sm border-t pt-4">{tip.additionalInfo}</p>
                  )}
                </CardContent>
              </Card>
            )}
             {error && (
              <Alert variant="destructive" className="animate-in fade-in-50 duration-500">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
