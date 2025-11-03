import { NextResponse } from "next/server";
import { addBooking, type Booking } from "@/lib/bookingsStore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      user,
      courier,
      price,
      route,
      items,
      contact,
      notes,
    } = body || {};

    const bookingId = `EC-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
    const record: Booking = {
      id: bookingId,
      user: user || null, // Ensure user from body is assigned
      courier: courier || null,
      price: price ?? null,
      route: route || null,
      items: items || [],
      contact: contact || null,
      notes: notes || "",
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };
    
    addBooking(record);

    return NextResponse.json({ booking: record }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to create booking" }, { status: 500 });
  }
}




