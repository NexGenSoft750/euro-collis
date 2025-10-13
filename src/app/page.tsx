import { Faq, Faqs } from "@/components/Faqs";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { JoinAsACourier } from "@/components/JoinAsACourier";
import { Section } from "@/components/layouts/Section";
import { TrustSafety } from "@/components/TrustSafety";
import { WhyEuroCollis } from "@/components/WhyEuroCollis";
import { WhyEuroCollisWorksBetter } from "@/components/WhyEuroCollisWorksBetter";
import { faqs } from "@/lib/faqs";
import styles from "@/styles/pages/Home.module.scss";
import { FaqLibProps } from "@/types/lib";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Section className="px-22">
        <HeroSection />
      </Section>
      <Section className="pt-4 pb-20">
        <HowItWorks />
      </Section>
      <Section className="bg-grey py-14">
        <WhyEuroCollis />
      </Section>
      <Section className="pb-10 md:pb-16" withXPadding={false}>
        <JoinAsACourier />
      </Section>
      <Section className="bg-grey py-6">
        <WhyEuroCollisWorksBetter />
      </Section>
      <Section className="py-8">
        <TrustSafety />
      </Section>
      <Section className="bg-grey px-32 py-14">
        <h1 id="faq-section" className="text-center">Frequently asked questions</h1>
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

export default Home;