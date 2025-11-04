"use client";

import React, { useState } from 'react';
import styles from './QuoteForm.module.scss';
import QuoteFormProgress from './QuoteFormProgress';
import QuoteFormStep1 from './QuoteFormStep1';
import QuoteFormStep2 from './QuoteFormStep2';
import QuoteFormStep3 from './QuoteFormStep3';
import { useAuthContext } from '@/components/AuthProvider';
import { addBookingToStorage } from '@/lib/bookingsLocalStorage';

interface QuoteFormProps {
  initialPickupCountry?: string;
  initialDeliveryCountry?: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ 
  initialPickupCountry, 
  initialDeliveryCountry 
}) => {
  const { user } = useAuthContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [currentSubStep, setCurrentSubStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [sortByReviews, setSortByReviews] = useState(false);
  const [sortByDelivery, setSortByDelivery] = useState(false);
  const [deliveryType, setDeliveryType] = useState("All");
  const [selectedCourier, setSelectedCourier] = useState<number | null>(null);
  const [couriers, setCouriers] = useState<Array<{
    id: number;
    name: string;
    avatar: string;
    pickupCities: string;
    rating: number;
    reviewCount: number;
    trips: string;
    languages: string;
    status: string;
    statusIcon: string;
    price: number;
    deliveryDate: string;
    deliveryType: string;
    [key: string]: unknown;
  }>>([]);
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
    } catch (e: unknown) {
      setQuoteError((e as Error)?.message || 'Unable to fetch quotes');
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

  interface ContactData {
    fullName?: string;
    email?: string;
    phone?: string;
  }

  interface RouteData {
    pickupAddress?: string;
    pickupCity?: string;
    pickupCountry?: string;
    deliveryCity?: string;
    deliveryCountry?: string;
  }

  interface ItemData {
    name?: string;
    quantity?: number;
    weight?: number;
    dimensions?: string;
  }

  const handleConfirmBooking = async (contactData?: ContactData, routeData?: RouteData, itemsData?: ItemData[]) => {
    try {
      const courier = couriers.find(c => c.id === selectedCourier) || null;
      const bookingData = {
        user: user ? { id: user.id, email: user.email, name: user.name } : null,
        courier,
        price: courier?.price ?? null,
        route: routeData || {},
        items: itemsData || [],
        contact: contactData || {},
        notes: '',
      };

      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      
      if (res.ok) {
        const data = await res.json();
        const booking = data.booking;
        
        // Save to local storage as well
        if (booking) {
          addBookingToStorage(booking);
        }
        
        return booking; // Return booking so BookingDetails can use the real ID
      }
    } catch {
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
            initialPickupCountry={initialPickupCountry}
            initialDeliveryCountry={initialDeliveryCountry}
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