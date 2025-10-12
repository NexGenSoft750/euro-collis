"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Icon } from '@/components/ui';
import styles from './BookingSuccess.module.scss';
import Link from 'next/link';

const BookingSuccessContent: React.FC = () => {
  const searchParams = useSearchParams();
  
  // Get booking details from URL params (you can enhance this with actual data)
  const courierName = searchParams.get('courier') || 'Your Courier';
  const price = searchParams.get('price') || '€170';
  const deliveryDate = searchParams.get('deliveryDate') || '6-8 July';
  const bookingId = searchParams.get('bookingId') || 'EC-' + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className={styles.successPage}>
      <div className={styles.successContainer}>
        {/* Success Header */}
        <div className={styles.successHeader}>
          <div className={styles.successIcon}>
            <Icon
              src="/images/common/checkmark-icon.png"
              alt="Success"
              width={48}
              height={48}
            />
          </div>
          <h1 className={styles.successTitle}>Booking Confirmed!</h1>
          <p className={styles.successSubtitle}>
            Your shipment has been successfully booked and you'll receive a confirmation email shortly.
          </p>
        </div>

        {/* Booking Details Card */}
        <div className={styles.bookingCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Booking Details</h2>
            <span className={styles.bookingId}>#{bookingId}</span>
          </div>
          
          <div className={styles.bookingInfo}>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>Courier</div>
              <div className={styles.infoValue}>{courierName}</div>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>Total Price</div>
              <div className={styles.infoValue}>{price}</div>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>Expected Delivery</div>
              <div className={styles.infoValue}>{deliveryDate}</div>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>Status</div>
              <div className={styles.statusBadge}>
                <Icon
                  src="/images/common/checkmark-icon.png"
                  alt="Confirmed"
                  width={16}
                  height={16}
                />
                Confirmed
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className={styles.nextSteps}>
          <h3 className={styles.nextStepsTitle}>What's Next?</h3>
          <div className={styles.stepsList}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h4>Confirmation Email</h4>
                <p>You'll receive a detailed confirmation email with all booking information.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h4>Courier Contact</h4>
                <p>Your courier will contact you to arrange pickup details and timing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className={styles.footerLinks}>
          <Link href="/" className={styles.footerLink}>
            <Icon
              src="/images/common/home-icon.png"
              alt="Home"
              width={16}
              height={16}
            />
            Back to Home
          </Link>
          <Link href="/quote" className={styles.footerLink}>
            <Icon
              src="/images/common/checkmark-icon.png"
              alt="Quote"
              width={16}
              height={16}
            />
            Get New Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

const BookingSuccess: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingSuccessContent />
    </Suspense>
  );
};

export default BookingSuccess;