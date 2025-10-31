"use client";

import React, { useState } from 'react';
import styles from './QuoteForm.module.scss';
import QuoteFormProgress from './QuoteFormProgress';
import QuoteFormStep1 from './QuoteFormStep1';
import QuoteFormStep2 from './QuoteFormStep2';
import QuoteFormStep3 from './QuoteFormStep3';

const QuoteForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentSubStep, setCurrentSubStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [sortByReviews, setSortByReviews] = useState(false);
  const [sortByDelivery, setSortByDelivery] = useState(false);
  const [deliveryType, setDeliveryType] = useState("All");
  const [selectedCourier, setSelectedCourier] = useState<number | null>(null);
  const [couriers, setCouriers] = useState<any[]>([]);
  const [isLoadingQuotes, setIsLoadingQuotes] = useState(false);
  const [quoteError, setQuoteError] = useState<string | null>(null);

  // Steps configuration
  const steps = [
    { id: 1, title: 'Get a Quote', icon: '1' },
    { id: 2, title: 'Choose a Courier', icon: '2' },
    { id: 3, title: 'Booking Details', icon: '3' }
  ];

  // Fetch quotes from mock API when moving to step 2
  const fetchQuotes = async () => {
    try {
      setIsLoadingQuotes(true);
      setQuoteError(null);
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      if (!res.ok) throw new Error('Failed to fetch quotes');
      const data = await res.json();
      setCouriers(Array.isArray(data?.couriers) ? data.couriers : []);
    } catch (e: any) {
      setQuoteError(e?.message || 'Unable to fetch quotes');
      setCouriers([]);
    } finally {
      setIsLoadingQuotes(false);
    }
  };

  // Event handlers
  const handleNextStep = () => {
    if (currentStep < 3) {
      setCompletedSteps(prev => [...prev, currentStep]);
      const next = currentStep + 1;
      setCurrentStep(next);
      if (next === 2) {
        // Upon entering Choose a Courier, load quotes
        fetchQuotes();
      }
    }
  };

  const markSubStepCompleted = (subStep: number) => {
    if (!completedSteps.includes(subStep)) {
      setCompletedSteps(prev => [...prev, subStep]);
    }
  };

  const handleSelectCourier = (courierId: number) => {
    setSelectedCourier(courierId);
  };

  const handleBookCourier = (courierId: number) => {
    const courier = couriers.find(c => c.id === courierId);
    if (courier) {
      setSelectedCourier(courierId);
      setCurrentStep(3);
    }
  };

  const handleEditSelection = () => {
    setSelectedCourier(null);
    setCurrentStep(2);
  };

  const handleConfirmBooking = async () => {
    try {
      const courier = couriers.find(c => c.id === selectedCourier) || null;
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: null,
          courier,
          price: courier?.price ?? null,
          route: {},
          items: [],
          contact: {},
          notes: '',
        })
      });
      
      if (res.ok) {
        const data = await res.json();
        return data.booking; // Return booking so BookingDetails can use the real ID
      }
    } catch (e) {
      // swallow for now; UI handles redirect
    }
    return null;
  };

  const selectedCourierInfo = couriers.find(c => c.id === selectedCourier);

  return (
    <div className={styles.quoteForm}>
      <QuoteFormProgress currentStep={currentStep} steps={steps} />
      
      <div className={styles.quoteForm__content}>
        {currentStep === 1 && (
          <QuoteFormStep1
            currentSubStep={currentSubStep}
            setCurrentSubStep={setCurrentSubStep}
            onNextStep={handleNextStep}
            onMarkSubStepCompleted={markSubStepCompleted}
          />
        )}
        {currentStep === 2 && (
          <QuoteFormStep2
            couriers={couriers}
            selectedCourier={selectedCourier}
            sortByReviews={sortByReviews}
            sortByDelivery={sortByDelivery}
            deliveryType={deliveryType}
            onSelectCourier={handleSelectCourier}
            onBookCourier={handleBookCourier}
            onEditSelection={handleEditSelection}
            onSetSortByReviews={setSortByReviews}
            onSetSortByDelivery={setSortByDelivery}
            onSetDeliveryType={setDeliveryType}
            isLoading={isLoadingQuotes}
            errorMessage={quoteError || undefined}
          />
        )}
        {currentStep === 3 && (
          <QuoteFormStep3
            selectedCourier={selectedCourierInfo || null}
            onEditSelection={handleEditSelection}
            onConfirmBooking={handleConfirmBooking}
          />
        )}
      </div>
    </div>
  );
};

export default QuoteForm;