// Local storage utility for bookings
import { Booking } from '@/lib/bookingsStore';

const BOOKINGS_STORAGE_KEY = 'eurocollis_bookings';

export function getBookingsFromStorage(): Booking[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(BOOKINGS_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveBookingsToStorage(bookings: Booking[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
}

export function getUserBookings(userId: string): Booking[] {
  const allBookings = getBookingsFromStorage();
  return allBookings.filter(booking => booking.user?.id === userId);
}

export function addBookingToStorage(booking: Booking): void {
  const bookings = getBookingsFromStorage();
  bookings.push(booking);
  saveBookingsToStorage(bookings);
}

export function getBookingByIdFromStorage(id: string): Booking | undefined {
  const bookings = getBookingsFromStorage();
  return bookings.find(b => b.id === id);
}

export function updateBookingInStorage(id: string, updates: Partial<Booking>): boolean {
  const bookings = getBookingsFromStorage();
  const index = bookings.findIndex(b => b.id === id);
  if (index === -1) return false;
  bookings[index] = { ...bookings[index], ...updates };
  saveBookingsToStorage(bookings);
  return true;
}

