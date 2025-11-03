import { Faq, Faqs } from '@/components/Faqs';
import { Section } from '@/components/layouts/Section';
import { QuoteFormContainer } from '@/components/QuoteForm';
import { faqs } from '@/lib/faqs';
import { FaqLibProps } from '@/types/lib';
import { Suspense } from 'react';

const QuotePage = () => {
  return (
    <>
      <Section className="px-32 py-14 pb-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Your Instant Shipping Quote</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Easily compare prices from top couriers for your shipments between Europe and Morocco. 
            Fill in the details below to get competitive quotes and book your delivery in minutes.
          </p>
        </div>
        <Suspense fallback={<div className="text-center py-10">Loading quote form...</div>}>
          <QuoteFormContainer />
        </Suspense>
      </Section>
      <Section className="bg-grey px-32 py-14">
        <h2 id="faq-section" className="text-center">Frequently asked questions</h2>
        <Faqs aria-labelledby="faq-section">
          {
            faqs.map((faq: FaqLibProps) => (
              <Faq
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))
          }
        </Faqs>
      </Section>
    </>
  );
};

export default QuotePage;

