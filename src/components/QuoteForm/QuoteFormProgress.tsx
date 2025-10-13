import React from 'react';
import styles from './QuoteFormProgress.module.scss';

interface QuoteFormProgressProps {
  currentStep: number;
  steps: Array<{
    id: number;
    title: string;
    icon: string;
  }>;
}

const QuoteFormProgress: React.FC<QuoteFormProgressProps> = ({
  currentStep,
  steps
}) => {
  return (
    <div className={styles.quoteForm__progress}>
      {steps.map((step) => (
        <div key={step.id} className={styles.quoteForm__progressStep}>
          <div 
            className={`${styles.quoteForm__progressIcon} ${
              currentStep >= step.id ? styles.quoteForm__progressIconActive : ''
            }`}
            data-completed={currentStep > step.id ? 'true' : 'false'}
          >
            {currentStep > step.id ? '' : step.icon}
          </div>
          <span className={`${styles.quoteForm__progressText} ${
            currentStep >= step.id ? styles.quoteForm__progressTextActive : ''
          }`}>
            {step.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default QuoteFormProgress;
