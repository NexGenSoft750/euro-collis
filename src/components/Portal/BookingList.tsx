"use client";

import React from 'react';
import styles from './BookingList.module.scss';
import Link from 'next/link';
import { Button } from '@/components/ui';

type Booking = {
  id: string;
  courier?: { name?: string } | null;
  price?: number | null;
  status?: string;
  createdAt?: string;
};

export default function BookingList({
  bookings,
  loading,
  error,
}: {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
}) {
  return (
    <div style={{ height: '41.4vh' }}>
      <div className={styles.portal__header}>
        <h1 className={styles.portal__title}>Your Bookings</h1>
        <Link href="/quote">
          <Button className="bg-primary text-white">New Quote</Button>
        </Link>
      </div>

      {loading && <div>Loading bookings…</div>}
      {!loading && error && <div className={styles.portal__error}>{error}</div>}

      {!loading && !error && bookings.length === 0 && (
        <div className={styles.portal__empty}>No bookings yet.</div>
      )}

      {!loading && !error && bookings.length > 0 && (
        <div className={styles.portal__grid}>
          {bookings.map((b) => (
            <Link key={b.id} href={`/portal/bookings/${b.id}`} className={styles.card}>
              <div className={styles.card__left}>
                <div className={styles.card__title}>{b.courier?.name || 'Courier'}</div>
                <div className={styles.card__meta}>
                  {(b.status || 'confirmed') + ' • ' + (b.createdAt ? new Date(b.createdAt).toLocaleString() : '')}
                </div>
              </div>
              <div className={styles.card__price}>€{b.price ?? 0}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}




