"use client";

import React from 'react';
import { Section } from '@/components/layouts/Section';
import { Button } from '@/components/ui';
import { HowItWorks } from '@/components/HowItWorks';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-14 pb-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience seamless parcel delivery with EuroCollis. Compare couriers, get instant quotes, 
            and track your shipments every step of the way. Reliable, affordable, and stress-free shipping 
            between Europe and Morocco.
          </p>
        </div>
      </Section>

      {/* How It Works Component */}
      <Section className="bg-grey py-14">
        <HowItWorks />
      </Section>

      {/* Detailed Steps */}
      <Section className="py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Step-by-Step Process</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Search & Compare</h3>
                  <p className="text-gray-600">
                    Enter your shipment details including pickup and delivery locations, package dimensions, 
                    and weight. Our system will instantly search for available couriers on your route.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Book a Courier</h3>
                  <p className="text-gray-600">
                    Compare prices, delivery times, and courier reviews. Choose the option that best fits 
                    your needs and budget, then complete your booking securely.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Handoff the Package</h3>
                  <p className="text-gray-600">
                    Bring your parcel to the designated pickup point or arrange for courier pickup. 
                    Your courier will confirm receipt and begin the delivery process.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Track or Communicate</h3>
                  <p className="text-gray-600">
                    Monitor your shipment in real-time through your portal. Receive updates on pickup, 
                    transit, and delivery. Communicate directly with your courier if needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-grey py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get instant quotes from verified couriers and book your shipment in minutes. 
            Fast, secure, and fully trackable delivery between Europe and Morocco.
            Choose EuroCollis for reliable, efficient, and cost-effective shipping solutions tailored to your needs.
          </p>
          <Link href="/quote">
            <Button className="bg-primary text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors">
              Get Your Quote Now
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
