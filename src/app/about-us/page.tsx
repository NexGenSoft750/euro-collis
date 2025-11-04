"use client";

import React from 'react';
import { Section } from '@/components/layouts/Section';
import { Button } from '@/components/ui';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About EuroCollis</h1>
          <p className="text-xl text-blue-100">
            Connecting Europe with reliable, transparent courier services
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At EuroCollis, we believe that shipping across Europe should be simple, transparent, and affordable. 
              Our platform connects businesses and individuals with trusted courier services, eliminating the need 
              for intermediaries and ensuring you get the best rates.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded with a vision to revolutionize European logistics, we&apos;ve built a comprehensive platform 
              that makes it easy to compare courier services, book shipments, and track deliveries—all in one place.
            </p>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-grey py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                No hidden fees, no surprises. We believe in complete transparency in pricing and service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Efficiency</h3>
              <p className="text-gray-600">
                Streamlined processes that save you time and money. Compare, book, and track—all in minutes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust</h3>
              <p className="text-gray-600">
                We work only with verified couriers and maintain the highest standards of service quality.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How EuroCollis Works</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Your Shipment Details</h3>
                <p className="text-gray-600">
                  Tell us where you&apos;re shipping from and to, along with package details. It only takes a minute.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compare Courier Options</h3>
                <p className="text-gray-600">
                  Get instant quotes from multiple verified couriers. Compare prices, delivery times, and reviews.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Book & Track</h3>
                <p className="text-gray-600">
                  Select your preferred courier and book instantly. Track your shipment in real-time from your portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ship?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers across Europe
          </p>
          <Link href="/quote">
            <Button className="bg-white text-primary px-8 py-3 text-lg font-semibold hover:bg-gray-100">
              Get Started Now
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

