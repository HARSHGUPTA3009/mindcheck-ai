
import React, { useState } from 'react';
import { Mic, MicOff, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MoodSelector } from '@/components/MoodSelector';
import { AIResponse } from '@/components/AIResponse';

export const JournalInterface = () => {
  const [entry, setEntry] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [currentMood, setCurrentMood] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleVoiceToggle = () => {
    setIsRecording(!isRecording);
    // Voice recording logic would go here
    console.log('Voice recording toggled:', !isRecording);
  };

  const handleSubmit = async () => {
    if (!entry.trim()) return;
    
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const responses = [
        "I hear that you're going through a challenging time. It takes courage to acknowledge difficult feelings. Remember that it's completely normal to have ups and downs - you're human, and that's beautiful.",
        "Thank you for sharing your thoughts with me. I notice some patterns in what you've written that might be worth exploring. Would you like to talk about what's been weighing on your mind?",
        "Your awareness of your emotions shows great self-compassion. Sometimes just naming our feelings can be the first step toward understanding them better. You're doing important work by reflecting on your experiences.",
        "I can sense both struggle and strength in your words. It's okay to feel overwhelmed sometimes. What small step might help you feel a bit more grounded today?",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setAiResponse(randomResponse);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section id="journal" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Share Your Thoughts
            </h2>
            <p className="text-lg text-gray-600">
              Express yourself through writing or voice. Our AI companion is here to listen and support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Journal Input */}
            <Card className="border-wellness-accent/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-wellness-primary" />
                  <span>How are you feeling today?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <MoodSelector value={currentMood} onChange={setCurrentMood} />
                
                <div className="relative">
                  <Textarea
                    placeholder="Share what's on your mind... You can write about anything - your day, your feelings, your thoughts, or whatever feels important to you right now."
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                    className="min-h-32 resize-none border-wellness-accent/20 focus:border-wellness-primary"
                    rows={6}
                  />
                  
                  <div className="absolute bottom-3 right-3 flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleVoiceToggle}
                      className={`${
                        isRecording 
                          ? 'text-red-500 hover:text-red-600' 
                          : 'text-wellness-primary hover:text-wellness-primary/80'
                      }`}
                    >
                      {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    </Button>
                    
                    <Button
                      onClick={handleSubmit}
                      disabled={!entry.trim() || isLoading}
                      size="sm"
                      className="bg-wellness-primary hover:bg-wellness-primary/90"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {isRecording && (
                  <div className="flex items-center justify-center space-x-2 text-red-500 animate-pulse">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span className="text-sm">Recording...</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* AI Response */}
            <AIResponse response={aiResponse} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </section>
  );
};
