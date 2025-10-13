'use client';

import React, { useRef } from 'react';
import RouteInfoForm from './RouteInfoForm';
import ItemsDetail from './ItemsDetail';
import { Button } from '@/components/ui';
import styles from './QuoteFormStep1.module.scss';
import clsx from 'clsx';

interface QuoteFormStep1Props {
  currentSubStep: number;
  setCurrentSubStep: (step: number) => void;
  onNextStep: () => void;
  onMarkSubStepCompleted: (step: number) => void;
}

interface RouteInfoRef {
  validateForm: () => Promise<boolean>;
  values: {
    pickupCountry: string;
    deliveryCountry: string;
    pickupCity: string;
    deliveryCity: string;
    pickupDate: string;
    flexibility: string;
  };
}

interface ItemsDetailRef {
  validateItems: () => boolean;
  getSelectedItems: () => { name: string | undefined; quantity: number; }[];
  formData: { items: { carpet: number; fridge: number; suitcase: number; box: number; largeCarpet: number; }; estimatedWeight: number; };
}

const QuoteFormStep1: React.FC<QuoteFormStep1Props> = ({
  currentSubStep,
  setCurrentSubStep,
  onNextStep,
  onMarkSubStepCompleted
}) => {
  const routeInfoRef = useRef<RouteInfoRef>(null);
  const itemsDetailRef = useRef<ItemsDetailRef>(null);

  const handleNextStep = async () => {
    // Validate route info before proceeding
    if (routeInfoRef.current) {
      const isRouteValid = await routeInfoRef.current.validateForm();
      if (!isRouteValid) {
        return;
      }
    }

    // Validate items selection
    if (itemsDetailRef.current) {
      const hasItems = itemsDetailRef.current.validateItems();
      if (!hasItems) {
        return;
      }
    }

    onNextStep();
  };

  return (
    <div className={styles.quoteForm__step}>
      <RouteInfoForm ref={routeInfoRef} currentSubStep={currentSubStep} setCurrentSubStep={setCurrentSubStep}/>
      <div className={styles.quoteForm__step1}>
        <div className={styles.quoteForm__step1__header} onClick={() => {
          setCurrentSubStep(2);
          onMarkSubStepCompleted(2);
        }}>
          <div className={clsx(
            styles.quoteForm__indicator,
            {[styles.quoteForm__indicatorInactive]: currentSubStep < 2}
          )}></div>
          <h2 className={styles.quoteForm__title}>Items & Package Details</h2>
        </div>
        <div className={styles.quoteForm__ItemDetailGroup} onClick={() => setCurrentSubStep(2)}>
          <ItemsDetail ref={itemsDetailRef} />
        
          <Button 
            className={styles.quoteForm__findButton}
            onClick={handleNextStep}
          >
            Find Available Couriers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuoteFormStep1;
