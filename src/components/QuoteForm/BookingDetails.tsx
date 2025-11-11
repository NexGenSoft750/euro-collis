"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './BookingDetails.module.scss';
import { Button, Icon, ConfirmationModal } from '@/components/ui';
import clsx from 'clsx';
import { countryNames } from '@/lib/countries';

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

interface BookingDetailsProps {
  selectedCourier: {
    id: number;
    name: string;
    avatar: string;
    price: number;
    deliveryDate: string;
    deliveryType: string;
  } | null;
  onEditSelection: () => void;
  onConfirmBooking: (contactData?: ContactData, routeData?: RouteData, itemsData?: ItemData[]) => Promise<{ id: string } | null>;
}

const BookingDetails: React.FC<BookingDetailsProps> = ({
  selectedCourier,
  onEditSelection,
  onConfirmBooking
}) => {
  const router = useRouter();
  const [currentSubStep, setCurrentSubStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    pickupAddress: '',
    country: '',
    city: '',
    acceptTerms: false,
    acknowledgeWaiver: false
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    pickupAddress: false,
    country: false,
    city: false,
    acceptTerms: false,
    acknowledgeWaiver: false
  });

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // Mark sub-steps as completed
  const markSubStepCompleted = (subStep: number) => {
    if (!completedSteps.includes(subStep)) {
      setCompletedSteps(prev => [...prev, subStep]);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when field is filled
    if (value && errors[field as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [field]: false
      }));
    }

    // Auto-advance to next step when customer info is completed
    if (field === 'email' && value && formData.fullName && currentSubStep === 1) {
      setCurrentSubStep(2);
      markSubStepCompleted(1);
    }
  };

  return (
    <div className={styles.bookingDetails}>
      {/* Progress Line */}
      {/* <div className={styles.progressLine}></div> */}
      
      {/* Customer Info Section */}
      <div className={styles.bookingDetails__section}>
        <div className={styles.sectionHeader} onClick={() => {
          setCurrentSubStep(1);
          markSubStepCompleted(1);
        }}>
          <div className={clsx(
            styles.sectionHeader__indicator,
            {[styles.sectionHeader__indicatorInactive]: currentSubStep < 1}
          )}></div>
          <div className={styles.sectionIcon}>
            <Icon
              src={`/images/common/user-icon.png`}
              alt={`test Icon`}
              width={20}
              height={20}
            />
          </div>
          <h3 className={styles.sectionTitle}>Customer Info</h3>
        </div>
        <div className={styles.formGroupContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter Your Full Name"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
            />
            {errors.fullName && (
              <div className={styles.error}>
                Full Name is required
              </div>
            )}
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              className={styles.input}
              placeholder="Enter Your Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            {errors.email && (
              <div className={styles.error}>
                Email Address is required
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pickup & Delivery Info Section */}
      <div className={styles.bookingDetails__section}>
        <div className={styles.sectionHeader} onClick={() => {
          setCurrentSubStep(2);
          markSubStepCompleted(2);
        }}>
          <div className={clsx(
            styles.sectionHeader__indicator,
            {[styles.sectionHeader__indicatorInactive]: currentSubStep < 2}
          )}></div>
          <div className={styles.sectionIcon}>
            <Icon
                src={`/images/common/home-icon.png`}
                alt={`home Icon`}
                width={20}
                height={20}
            />
          </div>
          <h3 className={styles.sectionTitle}>Pickup & Delivery Info</h3>
        </div>
        <div className={styles.formGroupContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Pickup Address (street, hotel, riad, etc.)</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter Pickup Address Here"
              value={formData.pickupAddress}
              onChange={(e) => handleInputChange('pickupAddress', e.target.value)}
            />
            {errors.pickupAddress && (
              <div className={styles.error}>
                Pickup Address is required
              </div>
            )}
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Drop-off Country & City</label>
            <div className={styles.selectGroup}>
              <select
                className={styles.select}
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
              >
                <option value="">Select Country</option>
                {countryNames.map((country) => (
                  <option key={country} value={country.toLowerCase()}>
                    {country}
                  </option>
                ))}
              </select>
              <select
                className={styles.select}
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
              >
                <option value="">Select City</option>
                <option value="paris">Paris</option>
                <option value="madrid">Madrid</option>
                <option value="berlin">Berlin</option>
              </select>
            </div>
            {(errors.country || errors.city) && (
              <div className={styles.error}>
                Please select both Country and City
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Selected Courier Summary */}
      {selectedCourier && (
        <div className={styles.selectedCourier}>
          <div className={styles.selectedCourierContent}>
            <div className={styles.courierAvatar}>
              <Icon
                src={`/images/quote/courier/${selectedCourier.avatar}`}
                alt={`${selectedCourier.name} avatar`}
                width={40}
                height={40}
              />
            </div>
            <div className={styles.courierInfo}>
              <span className={styles.courierName}>{selectedCourier.name}</span>
              <span className={styles.courierDetails}>
                — Door-to-door delivery to France at Total price €{selectedCourier.price}, departing {selectedCourier.deliveryDate}
              </span>
            </div>
          </div>
          <button 
            className={styles.editButton} 
            onClick={() => {
              // Add a small delay for better UX feedback
              setTimeout(() => {
                onEditSelection();
              }, 150);
            }}
            title="Click to change your courier selection"
          >
            <Icon
              src={`/images/common/exit-icon.png`}
              alt={`Edit selection icon`}
              width={16}
              height={16}
            />
            Edit selection
          </button>
        </div>
      )}

      <div className={styles.agreementsSectionGroup}>
        {/* Agreements Section */}
        <div className={styles.agreementsSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>
              <Icon
                src={`/images/common/checkmark-icon.png`}
                alt={`test Icon`}
                width={16}
                height={16}
              />
            </div>
            <h3 className={styles.sectionTitle}>Agreements</h3>
          </div>
          
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={formData.acceptTerms}
                onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
              />
              <span className={styles.checkboxText}>
                Accept <a href="#" className={styles.link}>Terms & Conditions</a>
              </span>
            </label>
            {errors.acceptTerms && (
              <div className={styles.error}>
                Please accept the Terms & Conditions
              </div>
            )}
            
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={formData.acknowledgeWaiver}
                onChange={(e) => handleInputChange('acknowledgeWaiver', e.target.checked)}
              />
              <span className={styles.checkboxText}>
                Acknowledge <a href="#" className={styles.link}>Courier Waiver</a>
              </span>
            </label>
            {errors.acknowledgeWaiver && (
              <div className={styles.error}>
                Please acknowledge the Courier Waiver
              </div>
            )}
          </div>
        </div>

        {/* Confirm Booking Button */}
        <Button className={styles.confirmButton} onClick={() => {
          // Validate required fields and set errors
          const newErrors = {
            fullName: !formData.fullName,
            email: !formData.email,
            pickupAddress: !formData.pickupAddress,
            country: !formData.country,
            city: !formData.city,
            acceptTerms: !formData.acceptTerms,
            acknowledgeWaiver: !formData.acknowledgeWaiver
          };

          setErrors(newErrors);

          // Check if any errors exist
          const hasErrors = Object.values(newErrors).some(error => error);
          if (hasErrors) {
            return;
          }

          // Show booking confirmation modal
          setShowConfirmationModal(true);
        }}>
          Confirm Booking
        </Button>

      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        onConfirm={async () => {
          setShowConfirmationModal(false);
          
          // Prepare contact and route data
          const contactData = {
            fullName: formData.fullName,
            email: formData.email,
            phone: '', // Add phone field if needed
          };
          
          const routeData = {
            pickupAddress: formData.pickupAddress,
            pickupCity: formData.city,
            pickupCountry: formData.country,
            deliveryCity: '', // You may need to get this from step 1
            deliveryCountry: '', // You may need to get this from step 1
          };
          
          // Call booking API and get real booking ID
          const booking = await onConfirmBooking(contactData, routeData, []);
          const bookingId = booking?.id || `EC-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
          
          // Redirect to success page with booking details
          const params = new URLSearchParams({
            courier: selectedCourier?.name || '',
            price: `€${selectedCourier?.price || 0}`,
            deliveryDate: selectedCourier?.deliveryDate || '',
            bookingId: bookingId
          });
          
          router.push(`/booking-success?${params.toString()}`);
        }}
        title="Confirm Your Booking"
        message="Please review your booking details before confirming:"
        confirmText="Confirm Booking"
        cancelText="Cancel"
        type="success"
        iconSrc="/images/common/checkmark-icon.png"
        iconAlt="Booking confirmation"
      >
        <div className={styles.bookingSummary}>
          <div className={styles.summarySection}>
            <h4 className={styles.summaryTitle}>Customer Information</h4>
            <p className={styles.summaryText}><strong>Name:</strong> {formData.fullName}</p>
            <p className={styles.summaryText}><strong>Email:</strong> {formData.email}</p>
          </div>
          
          <div className={styles.summarySection}>
            <h4 className={styles.summaryTitle}>Delivery Information</h4>
            <p className={styles.summaryText}><strong>Pickup Address:</strong> {formData.pickupAddress}</p>
            <p className={styles.summaryText}><strong>Delivery Location:</strong> {formData.country}, {formData.city}</p>
          </div>
          
          {selectedCourier && (
            <div className={styles.summarySection}>
              <h4 className={styles.summaryTitle}>Selected Courier</h4>
              <div className={styles.courierSummary}>
                <div className={styles.courierAvatar}>
                  <Icon
                    src={`/images/quote/courier/${selectedCourier.avatar}`}
                    alt={`${selectedCourier.name} avatar`}
                    width={32}
                    height={32}
                  />
                </div>
                <div className={styles.courierDetails}>
                  <p className={styles.summaryText}><strong>Courier:</strong> {selectedCourier.name}</p>
                  <p className={styles.summaryText}><strong>Price:</strong> €{selectedCourier.price}</p>
                  <p className={styles.summaryText}><strong>Delivery Date:</strong> {selectedCourier.deliveryDate}</p>
                  <p className={styles.summaryText}><strong>Service Type:</strong> {selectedCourier.deliveryType}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className={styles.summarySection}>
            <h4 className={styles.summaryTitle}>Agreements</h4>
            <p className={styles.summaryText}>
              <strong>Terms & Conditions:</strong> {formData.acceptTerms ? '✓ Accepted' : '✗ Not Accepted'}
            </p>
            <p className={styles.summaryText}>
              <strong>Courier Waiver:</strong> {formData.acknowledgeWaiver ? '✓ Acknowledged' : '✗ Not Acknowledged'}
            </p>
          </div>
        </div>
      </ConfirmationModal>

    </div>
  );
};

export default BookingDetails;
