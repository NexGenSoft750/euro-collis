"use client";

import React, { useState } from 'react';
import { Section } from '@/components/layouts/Section';

interface ApiResult {
  success: boolean;
  status?: number;
  data?: unknown;
  error?: string;
}

export default function ApiTestPage() {
  const [quoteResult, setQuoteResult] = useState<ApiResult | null>(null);
  const [bookingsResult, setBookingsResult] = useState<ApiResult | null>(null);

  const [loading, setLoading] = useState(false);

  const testQuoteApi = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pickupCountry: 'Morocco',
          deliveryCountry: 'France',
          pickupCity: 'Casablanca',
          deliveryCity: 'Paris',
          pickupDate: '2024-08-01',
          flexibility: 'exact',
          items: [{ name: 'suitcase', quantity: 2 }]
        })
      });
      const data = await res.json();
      setQuoteResult({ success: res.ok, status: res.status, data });
    } catch (error) {
      setQuoteResult({ success: false, error: (error as Error).message });
    } finally {
      setLoading(false);
    }
  };

  const testBookingsApi = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/bookings');
      const data = await res.json();
      setBookingsResult({ success: res.ok, status: res.status, data });
    } catch (error) {
      setBookingsResult({ success: false, error: (error as Error).message });
    } finally {
      setLoading(false);
    }
  };

  const testCreateBooking = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: null,
          courier: { id: 1, name: 'Test Courier' },
          price: 150,
          route: { pickupCountry: 'Morocco', deliveryCountry: 'France' },
          items: [],
          contact: { fullName: 'Test User', email: 'test@example.com' },
          notes: 'Test booking'
        })
      });
      const data = await res.json();
      setBookingsResult({ success: res.ok, status: res.status, data });
    } catch (error) {
      setBookingsResult({ success: false, error: (error as Error).message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section className="py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">API Endpoints Test Page</h1>
        <p className="mb-6 text-gray-600">
          This page allows you to test the API endpoints that are available. 
          These endpoints are currently using mock data and will be replaced with MySQL backend in the future.
        </p>

        <div className="space-y-6">
          {/* Quote API Test */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">1. Quote API</h2>
            <p className="text-sm text-gray-600 mb-4">POST /api/quote - Get courier quotes based on route and items</p>
            <button
              onClick={testQuoteApi}
              disabled={loading}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Test Quote API'}
            </button>
            {quoteResult && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <pre className="text-xs overflow-auto">
                  {JSON.stringify(quoteResult, null, 2)}
                </pre>
              </div>
            )}
          </div>

          {/* Bookings API Test */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">2. Bookings API</h2>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-600">GET /api/bookings - List all bookings</p>
              <p className="text-sm text-gray-600">POST /api/book - Create a new booking</p>
              <p className="text-sm text-gray-600">GET /api/bookings/[id] - Get single booking</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={testBookingsApi}
                disabled={loading}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {loading ? 'Testing...' : 'Test GET Bookings'}
              </button>
              <button
                onClick={testCreateBooking}
                disabled={loading}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? 'Testing...' : 'Test Create Booking'}
              </button>
            </div>
            {bookingsResult && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <pre className="text-xs overflow-auto">
                  {JSON.stringify(bookingsResult, null, 2)}
                </pre>
              </div>
            )}
          </div>

          {/* Available Endpoints */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Available API Endpoints</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><code className="bg-gray-100 px-2 py-1 rounded">POST /api/quote</code> - Get courier quotes</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">POST /api/book</code> - Create a booking</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">GET /api/bookings</code> - List all bookings</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">GET /api/bookings/[id]</code> - Get single booking by ID</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              <strong>Note:</strong> These endpoints currently use in-memory storage for demo purposes. 
              They are structured to be easily replaced with MySQL database queries in the future.
            </p>
          </div>

          {/* Customer Portal */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Customer Portal</h2>
            <p className="text-sm text-gray-600 mb-4">
              The customer portal is available at <code className="bg-gray-100 px-2 py-1 rounded">/portal</code>
            </p>
            <a
              href="/portal"
              className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Go to Portal →
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

