"use client";

import React from 'react';
import { Section } from '@/components/layouts/Section';
import { Button } from '@/components/ui';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-14 pb-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to help you with any questions about shipping between Europe and Morocco. 
            Find answers to common questions or get in touch with our support team.
          </p>
        </div>
      </Section>

      {/* Support Options */}
      <Section className="bg-grey py-14">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Help & FAQs Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">❓</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Help & FAQs</h2>
              <p className="text-gray-600 mb-6">
                Find answers to commonly asked questions about shipping between Europe and Morocco, 
                booking process, courier services, and more. Get instant solutions to your queries.
              </p>
              <Link href="/help">
                <Button className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition font-semibold">
                  View Help & FAQs
                </Button>
              </Link>
            </div>

            {/* Contact Support Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">💬</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Support</h2>
              <p className="text-gray-600 mb-6">
                Can&apos;t find what you&apos;re looking for? Our support team is ready to assist you 
                with any questions about your shipments between Europe and Morocco. 
                We&apos;ll get back to you within 24 hours.
              </p>
              <Link href="/contact-us">
                <Button variant="outline" className="w-full border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/quote" className="bg-grey p-6 rounded-lg hover:shadow-lg transition text-center border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Get a Quote</h3>
                <p className="text-sm text-gray-600">Get instant shipping quotes</p>
              </Link>
              <Link href="/portal" className="bg-grey p-6 rounded-lg hover:shadow-lg transition text-center border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Track Your Shipment</h3>
                <p className="text-sm text-gray-600">View your bookings and track packages</p>
              </Link>
              <Link href="/for-couriers" className="bg-grey p-6 rounded-lg hover:shadow-lg transition text-center border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Become a Courier</h3>
                <p className="text-sm text-gray-600">Join our network of couriers</p>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
