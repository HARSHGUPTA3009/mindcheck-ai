
import React from 'react';
import { Brain, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-wellness-accent/20 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-wellness-primary to-wellness-secondary">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">MindCheck</h1>
              <p className="text-xs text-muted-foreground">Your Wellness Companion</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#journal" className="text-sm font-medium text-gray-700 hover:text-wellness-primary transition-colors">
              Journal
            </a>
            <a href="#insights" className="text-sm font-medium text-gray-700 hover:text-wellness-primary transition-colors">
              Insights
            </a>
            <a href="#privacy" className="text-sm font-medium text-gray-700 hover:text-wellness-primary transition-colors">
              Privacy
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-wellness-primary hover:bg-wellness-primary/90">
              Get Started
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
