
import React from 'react';
import { Heart, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-wellness-primary/20 blur-xl"></div>
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-wellness-primary to-wellness-secondary">
                <Heart className="h-10 w-10 text-white animate-pulse-gentle" />
              </div>
            </div>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Safe Space for
            <span className="block text-gradient font-serif italic">Mental Wellness</span>
          </h1>
          
          <p className="mb-8 text-lg leading-8 text-gray-600 sm:text-xl max-w-3xl mx-auto">
            Experience AI-powered journaling that understands your emotions, provides gentle guidance, 
            and helps you track your mental wellness journey with complete privacy and empathy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-wellness-primary hover:bg-wellness-primary/90 text-white px-8 py-4 text-lg">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="border-wellness-primary text-wellness-primary hover:bg-wellness-light px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Shield className="h-5 w-5 text-wellness-primary" />
              <span>100% Private & Secure</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Sparkles className="h-5 w-5 text-wellness-primary" />
              <span>AI-Powered Insights</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Heart className="h-5 w-5 text-wellness-primary" />
              <span>Empathetic Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
