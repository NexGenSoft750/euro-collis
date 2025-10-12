import React from 'react';
import QuoteForm from './QuoteForm';
import styles from './QuoteFormContainer.module.scss';

const QuoteFormContainer: React.FC = () => {
  return (
    <div className={styles.quoteFormContainer}>
      <QuoteForm />
    </div>
  );
};

export default QuoteFormContainer;
