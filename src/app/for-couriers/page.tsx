"use client";

import React, { useState } from 'react';
import { Section } from '@/components/layouts/Section';
import { Button } from '@/components/ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/components/AuthProvider';

export default function ForCouriersPage() {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    phone: '',
    license: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuthContext();
  const router = useRouter();

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validation
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // Simulate async signup
    setTimeout(() => {
      if (signup(formData.email, formData.password, formData.name || undefined)) {
        router.push('/portal');
      } else {
        setError('An account with this email already exists. Please sign in instead.');
      }
      setIsLoading(false);
    }, 300);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="py-14 pb-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join EuroCollis as a Courier</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Earn money while traveling! Become a trusted EuroCollis courier and deliver packages 
            between Morocco and Europe. Connect with thousands of customers and grow your delivery business.
          </p>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-grey py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Partner with EuroCollis?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">More Customers</h3>
              <p className="text-gray-600">
                Access thousands of potential customers actively looking for courier services 
                between Europe and Morocco.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Rates</h3>
              <p className="text-gray-600">
                Set your own pricing and compete fairly. No hidden fees or commissions 
                that eat into your profits.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Management</h3>
              <p className="text-gray-600">
                Our intuitive platform makes it easy to manage bookings, track deliveries, 
                and communicate with customers.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How to Become a Courier */}
      <Section className="py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How to Become a Courier</h2>
          <div className="space-y-6">
            <div className="flex gap-6 bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sign Up</h3>
                <p className="text-gray-600">
                  Complete our simple registration process. We&apos;ll verify your credentials and courier license.
                </p>
              </div>
            </div>
            <div className="flex gap-6 bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Set Your Rates</h3>
                <p className="text-gray-600">
                  Define your service areas, delivery times, and pricing. You&apos;re in complete control.
                </p>
              </div>
            </div>
            <div className="flex gap-6 bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Receive Bookings</h3>
                <p className="text-gray-600">
                  When customers request quotes for routes you serve, you&apos;ll automatically 
                  be included in the comparison.
                </p>
              </div>
            </div>
            <div className="flex gap-6 bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deliver & Get Paid</h3>
                <p className="text-gray-600">
                  Complete deliveries and get paid quickly. Build your reputation with customer reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Requirements */}
      <Section className="bg-grey py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Requirements</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Valid courier license and insurance</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Reliable vehicle suitable for deliveries</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Good track record and references</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Smartphone with GPS for tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Commitment to excellent customer service</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Sign Up Form Section */}
      <Section className="py-14">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sign Up to Become a Courier</h2>
              <p className="text-gray-600">
                Fill out the form below to start your journey as a EuroCollis courier partner
              </p>
            </div>

            {!showSignupForm ? (
              <div className="text-center">
                <Button
                  onClick={() => setShowSignupForm(true)}
                  className="bg-primary text-white px-8 py-3 text-lg font-semibold rounded-lg hover:bg-blue-600 transition"
                >
                  Show Sign Up Form
                </Button>
                <p className="mt-4 text-gray-600">
                  Already have an account?{' '}
                  <Link href="/login" className="text-primary font-semibold hover:text-blue-600">
                    Sign in here
                  </Link>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSignupSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="John Doe"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="you@example.com"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="+33 1 23 45 67 89"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="Your Company"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="••••••••"
                      disabled={isLoading}
                    />
                    <p className="mt-1 text-xs text-gray-500">Must be at least 6 characters</p>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="••••••••"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="license" className="block text-sm font-medium text-gray-700 mb-2">
                    Courier License Number
                  </label>
                  <input
                    type="text"
                    id="license"
                    name="license"
                    value={formData.license}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="Enter your courier license number"
                    disabled={isLoading}
                  />
                  <p className="mt-1 text-xs text-gray-500">We&apos;ll verify this during the approval process</p>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating Account...' : 'Create Courier Account'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowSignupForm(false)}
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition font-semibold"
                  >
                    Cancel
                  </Button>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/login" className="font-semibold text-primary hover:text-blue-600">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-grey py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our network of trusted couriers and start earning money while traveling between Europe and Morocco. 
            Set your own rates, manage bookings easily, and build your reputation with customer reviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <Button variant="outline" className="border-2 border-primary text-primary px-8 py-4 text-lg font-semibold rounded-lg hover:bg-primary hover:text-white transition">
                Contact Us
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button className="bg-primary text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
