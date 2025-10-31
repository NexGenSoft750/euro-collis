// Shared in-memory store for bookings (demo/mock purposes)
// In production, this will be replaced by MySQL database

export interface User {
  id?: string;
  name?: string;
  email?: string;
  [key: string]: unknown;
}

export interface Courier {
  id?: number | string;
  name?: string;
  avatar?: string;
  price?: number;
  [key: string]: unknown;
}

export interface Route {
  pickupCountry?: string;
  pickupCity?: string;
  deliveryCountry?: string;
  deliveryCity?: string;
  [key: string]: unknown;
}

export interface Contact {
  fullName?: string;
  email?: string;
  phone?: string;
  [key: string]: unknown;
}

export interface Booking {
  id: string;
  user?: User | null;
  courier?: Courier | null;
  price?: number | null;
  route?: Route | null;
  items?: unknown[];
  contact?: Contact | null;
  notes?: string;
  status?: string;
  createdAt?: string;
}

// Use globalThis to persist across module reloads in dev mode
declare global {
  var __bookingsStore__: Booking[] | undefined;
}

function getStore(): Booking[] {
  if (!globalThis.__bookingsStore__) {
    globalThis.__bookingsStore__ = [];
  }
  return globalThis.__bookingsStore__;
}

export function addBooking(booking: Booking): void {
  const store = getStore();
  store.push(booking);
}

export function getBookings(): Booking[] {
  const store = getStore();
  return [...store];
}

export function getBookingById(id: string): Booking | undefined {
  const store = getStore();
  return store.find(b => b.id === id);
}

export function clearBookings(): void {
  globalThis.__bookingsStore__ = [];
}

