
import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

export const PrivacyBanner = () => {
  return (
    <section className="py-12 bg-wellness-light/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="glassmorphism rounded-2xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Your Privacy is Our Priority
              </h2>
              <p className="text-gray-600">
                We believe mental wellness requires trust. Your thoughts stay yours.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-wellness-primary/10 mb-4">
                  <Lock className="h-6 w-6 text-wellness-primary" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">End-to-End Encrypted</h3>
                <p className="text-sm text-gray-600">Your entries are encrypted before leaving your device</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-wellness-primary/10 mb-4">
                  <Eye className="h-6 w-6 text-wellness-primary" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">No Permanent Storage</h3>
                <p className="text-sm text-gray-600">Entries are processed in memory and deleted immediately</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-wellness-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-wellness-primary" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Your Consent Matters</h3>
                <p className="text-sm text-gray-600">You control what data is saved and for how long</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
