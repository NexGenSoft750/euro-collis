"use client";

import React from 'react';
import { Section } from '@/components/layouts/Section';
import { Button } from '@/components/ui';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-14 pb-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About EuroCollis</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for shipping between Europe and Morocco. 
            Experience seamless parcel delivery with EuroCollis—compare couriers, get instant quotes, 
            and track your shipments every step of the way.
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="bg-grey py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              At EuroCollis, we believe that shipping between Europe and Morocco should be simple, 
              transparent, and affordable. Our platform connects businesses and individuals with 
              verified courier services, allowing you to compare prices, book shipments, and track 
              deliveries all in one place.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We make shipping reliable, affordable, and stress-free. Whether you&apos;re sending 
              packages from Europe to Morocco or vice versa, EuroCollis provides fast, secure, and 
              fully trackable delivery solutions tailored to your needs.
            </p>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                No hidden fees, no surprises. We believe in complete transparency in pricing and service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Efficiency</h3>
              <p className="text-gray-600">
                Streamlined processes that save you time and money. Compare, book, and track—all in minutes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
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
      <Section className="bg-grey py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How EuroCollis Works</h2>
          <div className="space-y-6">
            <div className="flex gap-6 bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Search & Compare</h3>
                <p className="text-gray-600">
                  Enter your shipment details including pickup and delivery locations between Europe and Morocco. 
                  Our system instantly searches for available couriers on your route.
                </p>
              </div>
            </div>
            <div className="flex gap-6 bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Book a Courier</h3>
                <p className="text-gray-600">
                  Compare prices, delivery times, and courier reviews. Choose the option that best fits 
                  your needs and budget, then complete your booking securely.
                </p>
              </div>
            </div>
            <div className="flex gap-6 bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Handoff the Package</h3>
                <p className="text-gray-600">
                  Bring your parcel to the designated pickup point or arrange for courier pickup. 
                  Your courier will confirm receipt and begin the delivery process.
                </p>
              </div>
            </div>
            <div className="flex gap-6 bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Track or Communicate</h3>
                <p className="text-gray-600">
                  Monitor your shipment in real-time through your portal. Receive updates on pickup, 
                  transit, and delivery. Communicate directly with your courier if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Ship?</h2>
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
