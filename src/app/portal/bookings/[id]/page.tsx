"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Section } from "@/components/layouts/Section";
import { PortalBookingDetail } from "@/components/Portal";

export default function BookingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = (params?.id as string) || "";
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/bookings/${id}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setBooking(data?.booking || null);
      } catch (e: any) {
        setError(e?.message || "Unable to load booking");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  return (
    <Section className="py-10">
      {loading && <div>Loading…</div>}
      {!loading && error && <div className="text-error">{error}</div>}
      {!loading && !error && booking && (
        <PortalBookingDetail booking={booking} onBack={() => router.back()} />)
      }
      {!loading && !error && !booking && <div>Booking not found.</div>}
    </Section>
  );
}


