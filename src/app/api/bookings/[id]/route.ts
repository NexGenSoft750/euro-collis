import { NextResponse } from "next/server";
import { getBookingById } from "@/lib/bookingsStore";

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> | { id: string } }
) {
  // Handle Next.js 15 async params or Next.js 14 sync params
  const params = await Promise.resolve(context.params);
  const { id } = params;
  const booking = getBookingById(id);
  if (!booking) return NextResponse.json({ message: "Not found" }, { status: 404 });
  return NextResponse.json({ booking }, { status: 200 });
}




