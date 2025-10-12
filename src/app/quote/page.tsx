import { Faq, Faqs } from '@/components/faqs';
import { Section } from '@/components/layouts/Section';
import { QuoteFormContainer } from '@/components/QuoteForm';
import { faqs } from '@/lib/faqs';
import { FaqLibProps } from '@/types/lib';
import { NextPage } from 'next';

const QuotePage: NextPage = () => {
  return (
    <>
      <Section className="px-32 py-14 pb-8">
        <QuoteFormContainer />
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

