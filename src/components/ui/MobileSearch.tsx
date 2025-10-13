"use client";

import { useState } from 'react';
import styles from './MobileSearch.module.scss';
import { Button } from './Button';

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

const MobileSearch: React.FC = () => {
    const [collectFrom, setCollectFrom] = useState("Marseille, France");
    const [deliveringTo, setDeliveringTo] = useState("Casablanca, Morocco");

    const locations = [
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
    ];

    const handleGetQuote = () => {
        console.log("Get Quote clicked!", { collectFrom, deliveringTo });
    };

    return (
        <div className={styles.mobileSearch}>
            <LocationDropdown
                label="Collect from"
                value={collectFrom}
                onChange={setCollectFrom}
                options={locations}
            />
            <LocationDropdown
                label="Delivering to"
                value={deliveringTo}
                onChange={setDeliveringTo}
                options={locations}
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
