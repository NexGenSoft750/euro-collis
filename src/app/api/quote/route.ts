import { NextResponse } from "next/server";

// Mock quote search: returns a list of couriers with pricing based on inputs
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const {
      pickupCountry = "Morocco",
      deliveryCountry = "France",
      pickupCity = "",
      deliveryCity = "",
      pickupDate = "",
      flexibility = "exact",
      items = [],
    } = body || {};

    // Basic pseudo-pricing logic for mocks
    const basePrice = 120;
    const distanceFactor = pickupCountry !== deliveryCountry ? 1.3 : 1.0;
    const cityFactor = pickupCity && deliveryCity ? 1.1 : 1.0;
    const dateFactor = flexibility === "exact" ? 1.05 : 0.95;
    const itemsFactor = Array.isArray(items) && items.length > 0 ? 1.15 : 1.0;
    const priceSeed = basePrice * distanceFactor * cityFactor * dateFactor * itemsFactor;

    const couriers = [
      {
        id: 1,
        name: "Hicham E.",
        avatar: "courier-1.png",
        pickupCities: pickupCity || "Casablanca",
        rating: 4.8,
        reviewCount: 49,
        trips: "200+",
        languages: "French & Arabic",
        status: "verified",
        statusIcon: "chat",
        price: Math.round(priceSeed),
        deliveryDate: pickupDate || "6-8 July",
        deliveryType: "Door-to-Door",
      },
      {
        id: 2,
        name: "Amina D.",
        avatar: "courier-2.jpg",
        pickupCities: pickupCity || "Rabat",
        rating: 4.6,
        reviewCount: 18,
        trips: "180+",
        languages: "French & Arabic",
        status: "verified",
        statusIcon: "chat",
        price: Math.round(priceSeed * 0.9),
        deliveryDate: pickupDate || "10-12 July",
        deliveryType: "Pickup-Only",
      },
      {
        id: 3,
        name: "Karim L.",
        avatar: "courier-3.png",
        pickupCities: pickupCity || "Marrakesh",
        rating: 4.2,
        reviewCount: 11,
        trips: "100+",
        languages: "French & Arabic",
        status: "insured",
        statusIcon: "umbrella",
        price: Math.round(priceSeed * 0.8),
        deliveryDate: pickupDate || "8-10 July",
        deliveryType: "Drop-Off",
      },
    ];

    return NextResponse.json({ couriers }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to fetch quotes" }, { status: 500 });
  }
}




