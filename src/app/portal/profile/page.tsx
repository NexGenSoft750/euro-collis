"use client";

import React, { useState, useEffect } from 'react';
import { Section } from '@/components/layouts/Section';
import { useAuthContext } from '@/components/AuthProvider';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui';
import { countryNames } from '@/lib/countries';

export default function ProfilePage() {
  const { user, updateUser, logout } = useAuthContext();
  const router = useRouter();
  
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    
    // Load user data into form
    setFormData({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      address: user.address || '',
      city: user.city || '',
      postalCode: user.postalCode || '',
      country: user.country || '',
    });
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSave = () => {
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Validation
    if (!formData.email) {
      setErrorMessage('Email is required');
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // Update user
    setTimeout(() => {
      if (updateUser(formData)) {
        setSuccessMessage('Profile updated successfully!');
        setIsEditing(false);
      } else {
        setErrorMessage('Failed to update profile. Please try again.');
      }
      setIsLoading(false);
    }, 300);
  };

  const handleCancel = () => {
    // Reset form data to original user data
    setFormData({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      address: user.address || '',
      city: user.city || '',
      postalCode: user.postalCode || '',
      country: user.country || '',
    });
    setIsEditing(false);
    setSuccessMessage('');
    setErrorMessage('');
  };

  return (
    <Section className="py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg-primary p-8">
          {successMessage && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="John Doe"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                  {formData.name || 'Not set'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="you@example.com"
                  required
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                  {formData.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="+33 6 12 34 56 78"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                  {formData.phone || 'Not set'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              {isEditing ? (
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                >
                  <option value="">Select a country</option>
                  {countryNames.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                  {formData.country || 'Not set'}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street Address
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="123 Main Street"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                  {formData.address || 'Not set'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Paris"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                  {formData.city || 'Not set'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Postal Code
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="75001"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                  {formData.postalCode || 'Not set'}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
            {isEditing ? (
              <>
                <Button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </Button>
                <Button
                  onClick={handleCancel}
                  disabled={isLoading}
                  variant="outline"
                  className="flex-1 py-3 px-6 rounded-lg"
                >
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => setIsEditing(true)}
                  className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition font-semibold"
                >
                  Edit Profile
                </Button>
                <Button
                  onClick={() => router.push('/portal')}
                  variant="outline"
                  className="flex-1 py-3 px-6 rounded-lg"
                >
                  Back to Portal
                </Button>
              </>
            )}
            <Button
              onClick={logout}
              className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition font-semibold"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
