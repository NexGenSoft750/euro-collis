"use client";

import React from 'react';
import styles from './BookingDetail.module.scss';
import { Button } from '@/components/ui';
import { Booking } from '@/lib/bookingsStore';

export default function BookingDetail({ booking, onBack }:{ booking: Booking; onBack: () => void; }) {
  return (
    <div>
      <div className={styles.detail__header}>
        <h1 className={styles.detail__title}>Booking {booking.id}</h1>
        <Button variant="outline" className="text-charcoal" onClick={onBack}>
          ← Back
        </Button>
      </div>
      <div className={styles.detail__grid}>
        <div className={styles.detail__card}>
          <div className={styles.detail__label}>Courier</div>
          <div className={styles.detail__value}>{booking.courier?.name || '—'}</div>
        </div>
        <div className={styles.detail__card}>
          <div className={styles.detail__label}>Price</div>
          <div className={styles.detail__value}>€{booking.price ?? 0}</div>
        </div>
        <div className={styles.detail__card}>
          <div className={styles.detail__label}>Status</div>
          <div className={styles.detail__value}>{booking.status || 'confirmed'}</div>
        </div>
        <div className={styles.detail__card}>
          <div className={styles.detail__label}>Created</div>
          <div className={styles.detail__value}>{booking.createdAt ? new Date(booking.createdAt).toLocaleString() : '—'}</div>
        </div>
      </div>
    </div>
  );
}




