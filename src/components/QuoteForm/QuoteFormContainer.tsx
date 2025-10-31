"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import QuoteForm from './QuoteForm';
import styles from './QuoteFormContainer.module.scss';

const QuoteFormContainerContent: React.FC = () => {
  const searchParams = useSearchParams();
  
  // Get countries from URL params if available
  const pickupCountry = searchParams.get('pickupCountry') || null;
  const deliveryCountry = searchParams.get('deliveryCountry') || null;

  return (
    <div className={styles.quoteFormContainer}>
      <QuoteForm 
        initialPickupCountry={pickupCountry || undefined}
        initialDeliveryCountry={deliveryCountry || undefined}
      />
    </div>
  );
};

const QuoteFormContainer: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuoteFormContainerContent />
    </Suspense>
  );
};

export default QuoteFormContainer;
