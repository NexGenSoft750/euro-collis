"use client";

import React, { useEffect, useState } from "react";
import { Section } from "@/components/layouts/Section";
import { PortalBookingList } from "@/components/Portal";
import { useAuthContext } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { getUserBookings } from "@/lib/bookingsLocalStorage";
import { Booking } from "@/lib/bookingsStore";
import Link from "next/link";
import { Button } from "@/components/ui";

export default function PortalPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    
    const loadBookings = () => {
      try {
        setLoading(true);
        const userBookings = getUserBookings(user.id);
        setBookings(userBookings);
        setError(null);
      } catch (e: unknown) {
        setError((e as Error)?.message || "Unable to load bookings");
      } finally {
        setLoading(false);
      }
    };
    
    loadBookings();
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <Section className="py-10">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name || user.email.split('@')[0]}!
          </h1>
          <p className="text-gray-600 text-lg">
            Manage all your EuroCollis shipments in one convenient place
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link href="/quote">
            <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">New Shipment</h3>
              <p className="text-blue-100 text-sm">Get a quote and book a courier</p>
            </div>
          </Link>
          <Link href="/portal/profile">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">My Profile</h3>
              <p className="text-gray-600 text-sm">Update your account details</p>
            </div>
          </Link>
          <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Support</h3>
            <p className="text-gray-600 text-sm">Need help? Contact our team</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-primary">
            <div className="text-3xl font-bold text-gray-900">{bookings.length}</div>
            <div className="text-gray-600">Total Bookings</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
            <div className="text-3xl font-bold text-gray-900">
              {bookings.filter(b => b.status === 'confirmed' || b.status === 'delivered').length}
            </div>
            <div className="text-gray-600">Completed</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
            <div className="text-3xl font-bold text-gray-900">
              {bookings.filter(b => b.status === 'pending' || b.status === 'in_transit').length}
            </div>
            <div className="text-gray-600">In Progress</div>
          </div>
        </div>

        {/* Bookings Section */}
        <div className="bg-white rounded-lg shadow-lg-primary p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Your Bookings</h2>
              <p className="text-gray-600">View and manage all your shipments</p>
            </div>
            <Link href="/quote">
              <Button className="bg-primary text-white">New Quote</Button>
            </Link>
          </div>
          
          <PortalBookingList bookings={bookings} loading={loading} error={error} />
        </div>
      </div>
    </Section>
  );
}
