import clsx from 'clsx';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import { Button, RightArrowIcon } from '../ui';

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
                    <div className='absolute lg:static top-1/2 z-50 w-2/3 lg:w-full bg-white px-4 py-3 rounded-lg border-2 border-solid border-[#D9D9DB] shadow-lg'>
                        <div className='flex'>
                            <div className='flex items-center gap-6 p-4 ps-6 rounded-lg border-2 border-r-0 border-solid border-[#D9D9DB] w-full'>
                                <div>
                                    <span className='inline-flex mt-1 text-lg'>Marseille, France </span>
                                    <div></div>
                                </div>
                                <RightArrowIcon className="inline-block ms-2" size={25} color="black" />
                                <div>
                                    <span className='inline-flex mt-1 text-lg'>Casablanca, Moroco</span>
                                    <div></div>
                                </div>
                            </div>
                            <Button className='w-40 !text-lg !font-extrabold'>Search</Button>
                        </div>
                    </div>
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