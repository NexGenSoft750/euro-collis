import { NextResponse } from "next/server";
import { getBookings, addBooking, type Booking } from "@/lib/bookingsStore";

export async function GET() {
  const bookings = getBookings();
  return NextResponse.json({ bookings }, { status: 200 });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const id = `EC-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
    const rec: Booking = { 
      id, 
      ...body, 
      status: body.status || "confirmed",
      createdAt: new Date().toISOString() 
    };
    addBooking(rec);
    return NextResponse.json({ booking: rec }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}




