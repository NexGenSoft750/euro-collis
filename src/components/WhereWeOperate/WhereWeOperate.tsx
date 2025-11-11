"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui';
import { supportedCountries } from '@/lib/countries';
import styles from './WhereWeOperate.module.scss';

const WhereWeOperate = () => {
    // Create a duplicated array for seamless infinite scroll (duplicate 3 times for smooth loop)
    const duplicatedCountries = [...supportedCountries, ...supportedCountries, ...supportedCountries];

    return (
        <div className="py-14">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="relative">
                        <div className="w-full h-[400px] md:h-[500px] bg-grey rounded-lg flex items-center justify-center ">
                            <Image
                                src="/images/where-we-operate/morocco-europe-illustration.png"
                                alt="Morocco to Europe transportation illustration showing a Moroccan character with signposts pointing to European cities"
                                width={600}
                                height={600}
                                className="w-full h-full"
                                onError={(e) => {
                                    // Fallback if image doesn't exist - show placeholder
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const placeholder = target.parentElement?.querySelector('.image-placeholder');
                                    if (placeholder) {
                                        (placeholder as HTMLElement).style.display = 'flex';
                                    }
                                }}
                            />
                            <div className="image-placeholder hidden flex-col items-center justify-center text-gray-400 p-8">
                                <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                </svg>
                                <p className="text-center">Image placeholder</p>
                                <p className="text-sm text-center mt-2">Please add the Morocco-Europe illustration image</p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                From Morocco to Europe — and back again.
                            </h2>
                            <p className="text-lg text-gray-600 mb-4">
                                EuroCollis connects Morocco with trusted transporters across Europe.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                Whether you&apos;re sending something back home or to loved ones abroad, 
                                we make it safe, simple, and trackable.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Main Corridors We Cover:
                            </h3>
                            
                            {/* Country Flags Carousel */}
                            <div className="relative overflow-hidden mb-6 h-20">
                                <div className={styles.countryCarousel}>
                                    {duplicatedCountries.map((country, index) => (
                                        <div
                                            key={`${country.code}-${index}`}
                                            className={styles.countryCard}
                                        >
                                            <span className="text-2xl">{country.flag}</span>
                                            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                                                {country.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-sm text-gray-500">
                                More countries coming soon as new transporters join our network.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link href="/quote">
                                <Button className="bg-primary text-white px-8 py-3 text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                                    Get a Quote
                                </Button>
                            </Link>
                            <Link href="/for-couriers">
                                <Button variant="outline" className="border-2 border-primary text-primary px-8 py-3 text-lg font-semibold rounded-lg hover:bg-primary hover:text-white transition">
                                    Join as a Transporter
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhereWeOperate;

