"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './MobileSearch.module.scss';
import { Button } from './Button';
import { countryNames } from '@/lib/countries';

interface LocationDropdownProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: string[];
}

const LocationDropdown: React.FC<LocationDropdownProps> = ({ label, value, onChange, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option: string) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className={styles.locationDropdown}>
            <div className={styles.locationDropdown__selector} onClick={() => setIsOpen(!isOpen)}>
                <label className={styles.locationDropdown__label}>{label}</label>
                <span className='mt-1'>{value}</span>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L5 5.5L9 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            {isOpen && (
                <ul className={styles.locationDropdown__menu}>
                    {options.map((option) => (
                        <li key={option} onClick={() => handleSelect(option)}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

interface MobileSearchProps {
    pickupLocation?: string;
    deliveryLocation?: string;
    onPickupChange?: (location: string) => void;
    onDeliveryChange?: (location: string) => void;
}

const MobileSearch: React.FC<MobileSearchProps> = ({
    pickupLocation: propPickupLocation,
    deliveryLocation: propDeliveryLocation,
    onPickupChange,
    onDeliveryChange
}) => {
    const router = useRouter();
    const [collectFrom, setCollectFrom] = useState(propPickupLocation || "Marseille, France");
    const [deliveringTo, setDeliveringTo] = useState(propDeliveryLocation || "Casablanca, Morocco");

    const handleGetQuote = () => {
        // Extract country names from locations (assuming format: "City, Country")
        const extractCountry = (location: string) => {
            const parts = location.split(',');
            if (parts.length > 1) {
                return parts[1].trim();
            }
            return location;
        };
        
        const pickupCountry = extractCountry(collectFrom);
        const deliveryCountry = extractCountry(deliveringTo);
        
        // Navigate to quote page with countries as URL params
        const params = new URLSearchParams({
            pickupCountry: pickupCountry,
            deliveryCountry: deliveryCountry,
        });
        router.push(`/quote?${params.toString()}`);
    };

    const handlePickupChange = (value: string) => {
        setCollectFrom(value);
        if (onPickupChange) {
            onPickupChange(value);
        }
    };

    const handleDeliveryChange = (value: string) => {
        setDeliveringTo(value);
        if (onDeliveryChange) {
            onDeliveryChange(value);
        }
    };

    return (
        <div className={styles.mobileSearch}>
            <LocationDropdown
                label="Collect from"
                value={collectFrom}
                onChange={handlePickupChange}
                options={countryNames}
            />
            <LocationDropdown
                label="Delivering to"
                value={deliveringTo}
                onChange={handleDeliveryChange}
                options={countryNames}
            />
            <Button
                variant="solid"
                size="lg"
                rounded="lg"
                className={styles.mobileSearch__button}
                onClick={handleGetQuote}
            >
                Get Quote
            </Button>
        </div>
    );
};

export default MobileSearch;
