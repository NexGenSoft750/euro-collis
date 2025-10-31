// Shared in-memory store for bookings (demo/mock purposes)
// In production, this will be replaced by MySQL database

export interface Booking {
  id: string;
  user?: any;
  courier?: any;
  price?: number | null;
  route?: any;
  items?: any[];
  contact?: any;
  notes?: string;
  status?: string;
  createdAt?: string;
}

// Use globalThis to persist across module reloads in dev mode
declare global {
  // eslint-disable-next-line no-var
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

