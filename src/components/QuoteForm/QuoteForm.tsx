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

  // Steps configuration
  const steps = [
    { id: 1, title: 'Get a Quote', icon: '1' },
    { id: 2, title: 'Choose a Courier', icon: '2' },
    { id: 3, title: 'Booking Details', icon: '3' }
  ];

  const [couriers, setCouriers] = useState([
    {
      id: 1,
      name: "Hicham E.",
      avatar: "myphoto.png",
      pickupCities: "Casablanca",
      rating: 1.0,
      reviewCount: 49,
      trips: "200+",
      languages: "French & Arabic",
      status: "verified",
      statusIcon: "chat",
      price: 170,
      deliveryDate: "6-8 July",
      deliveryType: "Door-to-Door"
    },
    {
      id: 2,
      name: "Amina D.",
      avatar: "myphoto.png",
      pickupCities: "Rabat",
      rating: 4.8,
      reviewCount: 18,
      trips: "200+",
      languages: "French & Arabic",
      status: "verified",
      statusIcon: "chat",
      price: 150,
      deliveryDate: "10-12 July",
      deliveryType: "Pickup-Only"
    },
    {
      id: 3,
      name: "Karim L.",
      avatar: "myphoto.png",
      pickupCities: "Marrakesh",
      rating: 2.9,
      reviewCount: 11,
      trips: "100+",
      languages: "French & Arabic",
      status: "insured",
      statusIcon: "umbrella",
      price: 130,
      deliveryDate: "8-10 July",
      deliveryType: "Drop-Off"
    },
  ]);

  // Event handlers
  const handleNextStep = () => {
    if (currentStep < 3) {
      setCompletedSteps(prev => [...prev, currentStep]);
      setCurrentStep(currentStep + 1);
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

  const handleConfirmBooking = () => {
    console.log('Booking confirmed!');
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