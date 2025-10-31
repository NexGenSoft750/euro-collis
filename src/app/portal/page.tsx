"use client";

import React, { useEffect, useState } from "react";
import { Section } from "@/components/layouts/Section";
import { PortalBookingList } from "@/components/Portal";

interface BookingSummary {
  id: string;
  courier?: { name?: string } | null;
  price?: number | null;
  createdAt?: string;
  status?: string;
}

export default function PortalPage() {
  const [bookings, setBookings] = useState<BookingSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/bookings", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load bookings");
        const data = await res.json();
        setBookings(Array.isArray(data?.bookings) ? data.bookings : []);
      } catch (e: any) {
        setError(e?.message || "Unable to load bookings");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <Section className="py-10">
      <PortalBookingList bookings={bookings} loading={loading} error={error} />
    </Section>
  );
}


