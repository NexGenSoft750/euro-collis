"use client";

import clsx from 'clsx';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import { Search, RightArrowIcon } from '@/components/ui';
import MobileSearch from '@/components/ui/MobileSearch';
import { useMobile } from '@/hooks';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const HeroSection = () => {
    const [isMobileScreen] = useMobile();
    const router = useRouter();
    const [pickupLocation, setPickupLocation] = useState<string>("Marseille, France");
    const [deliveryLocation, setDeliveryLocation] = useState<string>("Casablanca, Morocco");

    return (
        <div className={clsx("flex flex-col relative", styles.heroSection)}>
            <div className={styles.heroSection__topBgImage}></div>
            <div className={styles.heroSection__bottomBgImage}></div>
            <div className='absolute inset-0 z-10 flex flex-wrap pt-10 md:pt-20'>
                <div className='w-full mobile-lg:w-[70%] flex flex-col gap-5'>
                    <div className='flex'>
                        <h1 className='text-4xl lg:text-5xl'>
                            Your Trusted Partner for <span className='text-primary'>Europe</span> to <span className='text-red'>Morocco</span> Shipping
                        </h1>
                        <div className="w-full relative md:-top-20 aspect-[1/1] block mobile-lg:hidden">
                            <Image
                                src="/images/hero-section/person-with-parcels.png"
                                alt="A person with parcel"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <p className='text-lg lg:text-xl'>Experience seamless parcel delivery with EuroCollis. Compare couriers, get instant quotes, and track your shipments every step of the way. Reliable, affordable, and stress-free shipping starts here.</p>
                    {!isMobileScreen && (
                        <Search.OuterWrapper>
                            <Search.InnerWrapper>
                                <div className="flex items-center gap-6 p-2 xl:p-4 ps-3 xl:ps-6 rounded-lg border-2 border-r-0 border-solid border-[#D9D9DB] w-full">
                                    <Search.LocationSelector
                                        label="Marseille, France"
                                        selectedLocation={pickupLocation}
                                        onLocationChange={setPickupLocation}
                                        locations={[
                                            "Pakistan",
                                            "India",
                                            "United States",
                                            "United Kingdom",
                                            "Canada",
                                            "Australia",
                                            "Germany",
                                            "France",
                                            "Saudi Arabia",
                                            "United Arab Emirates",
                                        ]}
                                    />
                                    <RightArrowIcon className="inline-block ms-2" size={25} color="black" />
                                    <Search.LocationSelector
                                        label="Casablanca, Morocco"
                                        selectedLocation={deliveryLocation}
                                        onLocationChange={setDeliveryLocation}
                                        locations={[
                                            "Pakistan",
                                            "India",
                                            "United States",
                                            "United Kingdom",
                                            "Canada",
                                            "Australia",
                                            "Germany",
                                            "France",
                                            "Saudi Arabia",
                                            "United Arab Emirates",
                                        ]}
                                    />
                                </div>
                                <Search.Button onClick={() => {
                                    // Extract country names from locations (assuming format: "City, Country")
                                    const extractCountry = (location: string) => {
                                        // Try to extract country from "City, Country" format
                                        const parts = location.split(',');
                                        if (parts.length > 1) {
                                            return parts[1].trim();
                                        }
                                        return location;
                                    };
                                    
                                    const pickupCountry = extractCountry(pickupLocation);
                                    const deliveryCountry = extractCountry(deliveryLocation);
                                    
                                    // Navigate to quote page with countries as URL params
                                    const params = new URLSearchParams({
                                        pickupCountry: pickupCountry,
                                        deliveryCountry: deliveryCountry,
                                    });
                                    router.push(`/quote?${params.toString()}`);
                                }}>Search</Search.Button>
                            </Search.InnerWrapper>
                        </Search.OuterWrapper>
                    )}
                </div>
                <div className="w-[30%] relative md:-top-20 aspect-[1/1] hidden mobile-lg:block">
                    <Image
                        src="/images/hero-section/person-with-parcels.png"
                        alt="A person with parcel"
                        fill
                        className="object-contain"
                    />
                </div>
                {isMobileScreen && <MobileSearch pickupLocation={pickupLocation} deliveryLocation={deliveryLocation} onPickupChange={setPickupLocation} onDeliveryChange={setDeliveryLocation} />}
            </div>
        </div>
    )
}

export default HeroSection;