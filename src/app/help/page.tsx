"use client";

import React from 'react';
import { Section } from '@/components/layouts/Section';
import { Button } from '@/components/ui';
import { Faq, Faqs } from '@/components/Faqs';
import { faqs } from '@/lib/faqs';
import { FaqLibProps } from '@/types/lib';
import Link from 'next/link';

export default function HelpPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-14 pb-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & FAQs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to frequently asked questions about shipping between Europe and Morocco, 
            booking process, courier services, tracking, and more. Get instant solutions to your queries.
          </p>
        </div>
      </Section>

      {/* FAQs Section */}
      <Section className="bg-grey py-14">
        <h2 id="faq-section" className="text-center mb-6">Frequently asked questions</h2>
        <Faqs aria-labelledby="faq-section">
          {faqs.map((faq: FaqLibProps) => (
            <Faq
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </Faqs>
      </Section>

      {/* Still Need Help Section */}
      <Section className="py-16 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help you 
            with any questions about your shipments between Europe and Morocco. 
            Contact us and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <Button className="bg-primary text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                Contact Us
              </Button>
            </Link>
            <Link href="/support">
              <Button variant="outline" className="border-2 border-primary text-primary px-8 py-4 text-lg font-semibold rounded-lg hover:bg-primary hover:text-white transition">
                Back to Support
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
