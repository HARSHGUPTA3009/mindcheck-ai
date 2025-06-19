
import React from 'react';
import { BarChart3, Calendar, Download, Mic, Shield, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Insights',
    description: 'Get empathetic, CBT-inspired reflections and gentle guidance tailored to your emotional state.',
  },
  {
    icon: Mic,
    title: 'Voice & Text Journaling',
    description: 'Express yourself however feels natural - through writing, speaking, or both.',
  },
  {
    icon: BarChart3,
    title: 'Mood Tracking',
    description: 'Visualize your emotional patterns over time with beautiful, insightful charts.',
  },
  {
    icon: Calendar,
    title: 'Weekly Summaries',
    description: 'Receive thoughtful weekly reports on your mental wellness journey and progress.',
  },
  {
    icon: Download,
    title: 'Exportable Reports',
    description: 'Download your wellness insights as PDFs to share with healthcare providers.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your thoughts are never stored permanently without your explicit consent.',
  },
];

export const FeatureGrid = () => {
  return (
    <section id="insights" className="py-20 bg-wellness-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Mental Wellness
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              MindCheck combines cutting-edge AI with thoughtful design to create 
              a comprehensive platform for your mental health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-wellness-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-wellness-primary to-wellness-secondary mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
