"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Section } from "@/components/layouts/Section";
import { PortalBookingDetail } from "@/components/Portal";
import { Booking } from "@/lib/bookingsStore";
import { useAuthContext } from "@/components/AuthProvider";
import { getBookingByIdFromStorage } from "@/lib/bookingsLocalStorage";

export default function BookingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = (params?.id as string) || "";
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    if (!id) return;
    
    const loadBooking = () => {
      try {
        setLoading(true);
        const foundBooking = getBookingByIdFromStorage(id);
        
        // Verify booking belongs to user
        if (foundBooking && foundBooking.user?.id === user.id) {
          setBooking(foundBooking);
          setError(null);
        } else {
          setError("Booking not found or you don&apos;t have permission to view it.");
        }
      } catch (e: unknown) {
        setError((e as Error)?.message || "Unable to load booking");
      } finally {
        setLoading(false);
      }
    };
    
    loadBooking();
  }, [id, user, router]);

  if (!user) {
    return null;
  }

  return (
    <Section className="py-10">
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
          <p className="text-gray-600">Loading booking details...</p>
        </div>
      )}
      {!loading && error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}
      {!loading && !error && booking && (
        <PortalBookingDetail booking={booking} onBack={() => router.push('/portal')} />
      )}
      {!loading && !error && !booking && (
        <div className="text-center py-12">
          <p className="text-gray-600">Booking not found.</p>
        </div>
      )}
    </Section>
  );
}


