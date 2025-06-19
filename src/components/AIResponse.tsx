
import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AIResponseProps {
  response: string;
  isLoading: boolean;
}

export const AIResponse: React.FC<AIResponseProps> = ({ response, isLoading }) => {
  if (!response && !isLoading) {
    return (
      <Card className="border-wellness-accent/20 shadow-lg">
        <CardContent className="flex items-center justify-center h-64 text-center">
          <div className="space-y-4">
            <div className="mx-auto h-16 w-16 rounded-full bg-wellness-light flex items-center justify-center">
              <Heart className="h-8 w-8 text-wellness-primary" />
            </div>
            <p className="text-gray-500">
              Share your thoughts and I'll provide gentle, supportive guidance
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-wellness-accent/20 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Sparkles className="h-5 w-5 text-wellness-primary" />
          <span>Gentle Reflection</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-wellness-primary">
              <div className="h-2 w-2 rounded-full bg-wellness-primary animate-pulse"></div>
              <div className="h-2 w-2 rounded-full bg-wellness-primary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="h-2 w-2 rounded-full bg-wellness-primary animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <span className="text-sm">Reflecting on your thoughts...</span>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 leading-relaxed font-serif text-base">
                {response}
              </p>
            </div>
            <div className="pt-4 border-t border-wellness-accent/20">
              <p className="text-xs text-gray-500 italic">
                Remember: This is supportive guidance, not professional therapy. 
                If you're experiencing serious mental health concerns, please reach out to a qualified professional.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
