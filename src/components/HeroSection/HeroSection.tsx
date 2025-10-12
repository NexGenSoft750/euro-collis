'use client';

import clsx from 'clsx';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import { Search, RightArrowIcon } from '@/components/ui';

const HeroSection = () => {
    return (
        <div className={clsx("flex flex-col gap-6 relative", styles.heroSection)}>
            <div className={styles.heroSection__topBgImage}></div>
            <div className={styles.heroSection__bottomBgImage}></div>
            <div className='absolute inset-0 z-10 flex pt-20'>
                <div className='w-[70%] flex flex-col gap-5'>
                    <h1>
                        Ship Smarter Between <span className='text-primary'>Europe</span> and <span className='text-red'>Morocco</span>
                    </h1>
                    <p className='text-xl'>Compare courier services, choose the best deal, and send parcels with confidence. Fast, affordable, and fully trackable.</p>
                    <Search.OuterWrapper>
                        <Search.InnerWrapper>
                            <div className="flex items-center gap-6 p-4 ps-6 rounded-lg border-2 border-r-0 border-solid border-[#D9D9DB] w-full">
                                <Search.LocationSelector
                                    label="Marseille, France"
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
                            <Search.Button>Search</Search.Button>
                        </Search.InnerWrapper>
                    </Search.OuterWrapper>
                </div>
                <div className="w-[30%] relative aspect-[1/1] hidden md:block">
                    <Image
                        src="/images/hero-section/person-with-parcels.png"
                        alt="A person with parcel"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;