import { NextResponse } from "next/server";
import { getBookingById } from "@/lib/bookingsStore";

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const { id } = params;
  const booking = getBookingById(id);
  if (!booking) return NextResponse.json({ message: "Not found" }, { status: 404 });
  return NextResponse.json({ booking }, { status: 200 });
}




