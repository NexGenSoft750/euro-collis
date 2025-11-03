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
  route?: {
    pickupCity?: string;
    pickupCountry?: string;
    deliveryCity?: string;
    deliveryCountry?: string;
  } | null;
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
  const getStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
      case 'confirmed':
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in_transit':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
          <p className="text-gray-600">Loading your bookings...</p>
        </div>
      )}

      {!loading && error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {!loading && !error && bookings.length === 0 && (
        <div className="text-center py-12">
          <div className="mb-4">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No bookings yet</h3>
          <p className="text-gray-600 mb-4">You haven't made any bookings yet.</p>
          <Link href="/quote">
            <Button className="bg-primary text-white">Get Your First Quote</Button>
          </Link>
        </div>
      )}

      {!loading && !error && bookings.length > 0 && (
        <div className="space-y-4">
          {bookings.map((b) => (
            <Link key={b.id} href={`/portal/bookings/${b.id}`}>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition cursor-pointer hover:border-primary">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {b.courier?.name || 'Courier Service'}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(b.status)}`}>
                        {b.status || 'confirmed'}
                      </span>
                    </div>
                    {b.route && (
                      <p className="text-sm text-gray-600 mb-1">
                        {b.route.pickupCity}, {b.route.pickupCountry} → {b.route.deliveryCity}, {b.route.deliveryCountry}
                      </p>
                    )}
                    <p className="text-xs text-gray-500">
                      {b.createdAt ? new Date(b.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      }) : 'Date not available'}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      €{b.price ? b.price.toFixed(2) : '0.00'}
                    </div>
                    <p className="text-xs text-gray-500">View Details →</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}




