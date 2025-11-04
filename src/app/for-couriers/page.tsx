"use client";

import React from 'react';
import { Section } from '@/components/layouts/Section';
import { Button } from '@/components/ui';
import Link from 'next/link';

export default function ForCouriersPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Join EuroCollis as a Courier</h1>
          <p className="text-xl text-blue-100">
            Connect with customers across Europe and grow your delivery business
          </p>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Partner with EuroCollis?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">More Customers</h3>
              <p className="text-gray-600">
                Access thousands of potential customers actively looking for courier services across Europe.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Rates</h3>
              <p className="text-gray-600">
                Set your own pricing and compete fairly. No hidden fees or commissions that eat into your profits.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Management</h3>
              <p className="text-gray-600">
                Our intuitive platform makes it easy to manage bookings, track deliveries, and communicate with customers.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-grey py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="space-y-8">
            <div className="flex gap-6 bg-white p-6 rounded-lg shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sign Up</h3>
                <p className="text-gray-600">
                  Complete our simple registration process. We&apos;ll verify your credentials and courier license.
                </p>
              </div>
            </div>
            <div className="flex gap-6 bg-white p-6 rounded-lg shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Set Your Rates</h3>
                <p className="text-gray-600">
                  Define your service areas, delivery times, and pricing. You&apos;re in complete control.
                </p>
              </div>
            </div>
            <div className="flex gap-6 bg-white p-6 rounded-lg shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Receive Bookings</h3>
                <p className="text-gray-600">
                  When customers request quotes for routes you serve, you&apos;ll automatically be included in the comparison.
                </p>
              </div>
            </div>
            <div className="flex gap-6 bg-white p-6 rounded-lg shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deliver & Get Paid</h3>
                <p className="text-gray-600">
                  Complete deliveries and get paid quickly. Build your reputation with customer reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Requirements */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Requirements</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Valid courier license and insurance</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Reliable vehicle suitable for deliveries</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Good track record and references</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Smartphone with GPS for tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Commitment to excellent customer service</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our network of trusted couriers and start growing your business today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <Button className="bg-white text-primary px-8 py-3 text-lg font-semibold hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link href="/quote">
              <Button variant="outline" className="border-2 border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-primary">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

