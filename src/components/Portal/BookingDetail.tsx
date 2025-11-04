"use client";

import React from 'react';
import { Button } from '@/components/ui';
import { Booking } from '@/lib/bookingsStore';
import Link from 'next/link';

export default function BookingDetail({ booking, onBack }:{ booking: Booking; onBack: () => void; }) {
  const getStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
      case 'confirmed':
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'in_transit':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Details</h1>
          <p className="text-gray-600">Booking ID: {booking.id}</p>
        </div>
        <Button variant="outline" onClick={onBack} className="text-gray-700">
          ← Back to Portal
        </Button>
      </div>

      {/* Status Badge */}
      <div className="mb-8">
        <span className={`inline-block px-4 py-2 rounded-lg border-2 font-semibold ${getStatusColor(booking.status)}`}>
          {booking.status?.toUpperCase() || 'CONFIRMED'}
        </span>
      </div>

      {/* Main Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500 mb-2">Courier Service</div>
          <div className="text-xl font-semibold text-gray-900">{booking.courier?.name || 'Not assigned'}</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500 mb-2">Total Price</div>
          <div className="text-3xl font-bold text-gray-900">€{booking.price ? booking.price.toFixed(2) : '0.00'}</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500 mb-2">Booking Date</div>
          <div className="text-lg font-semibold text-gray-900">
            {booking.createdAt ? new Date(booking.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            }) : 'Not available'}
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500 mb-2">Items</div>
          <div className="text-lg font-semibold text-gray-900">
            {booking.items && Array.isArray(booking.items) ? booking.items.length : 0} item(s)
          </div>
        </div>
      </div>

      {/* Route Information */}
      {booking.route && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Route Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-sm font-medium text-blue-600 mb-2">Pickup Location</div>
              <div className="text-lg font-semibold text-gray-900">
                {booking.route.pickupCity || '—'}, {booking.route.pickupCountry || '—'}
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-sm font-medium text-green-600 mb-2">Delivery Location</div>
              <div className="text-lg font-semibold text-gray-900">
                {booking.route.deliveryCity || '—'}, {booking.route.deliveryCountry || '—'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Information */}
      {booking.contact && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm font-medium text-gray-500 mb-2">Full Name</div>
              <div className="text-lg font-semibold text-gray-900">{booking.contact.fullName || '—'}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500 mb-2">Email</div>
              <div className="text-lg font-semibold text-gray-900">{booking.contact.email || '—'}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500 mb-2">Phone</div>
              <div className="text-lg font-semibold text-gray-900">{booking.contact.phone || '—'}</div>
            </div>
          </div>
        </div>
      )}

      {/* Items Detail */}
      {booking.items && Array.isArray(booking.items) && booking.items.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Items</h2>
          <div className="space-y-4">
            {booking.items.map((item, index: number) => {
              const itemData = item as { name?: string; quantity?: number; weight?: number; dimensions?: string };
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-gray-900">{itemData.name || `Item ${index + 1}`}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {itemData.quantity && `Quantity: ${itemData.quantity}`}
                        {itemData.weight && ` • Weight: ${itemData.weight}kg`}
                        {itemData.dimensions && ` • Dimensions: ${itemData.dimensions}`}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Notes */}
      {booking.notes && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Additional Notes</h2>
          <p className="text-gray-700">{booking.notes}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/quote" className="flex-1">
          <Button className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition font-semibold">
            Create New Booking
          </Button>
        </Link>
        <Link href="/portal" className="flex-1">
          <Button variant="outline" className="w-full py-3 px-6 rounded-lg">
            Back to All Bookings
          </Button>
        </Link>
      </div>
    </div>
  );
}
