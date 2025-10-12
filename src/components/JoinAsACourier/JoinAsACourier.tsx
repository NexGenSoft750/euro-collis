import Image from 'next/image';
import { Button } from '../ui';
import styles from './JoinAsACourier.module.scss';

const JoinAsACourier: React.FC = () => {
    return (
        <div className={styles.JoinAsACourier}>
            <div className='ps-10 md:ps-20 pt-10 pe-10 md:pe-0 flex items-center h-full'>
                <div className='flex-1 flex flex-col items-center md:items-start gap-7'>
                    <h1 className='text-center md:text-left'>Join as a Courier</h1>
                    <Image
                        src="/images/join-as-a-courier/delivery-truck.png"
                        alt="Delivery Truck"
                        width={180}
                        height={180}
                        className="object-contain block md:hidden"
                    />
                    <p className='text-xl text-center md:text-left'>Earn money while traveling! Become a trusted Eurocollis courier and deliver packages between Morocco and Europe.</p>
                    <Button className='!text-lg'>
                        Sign Up as Courier
                    </Button>
                </div>
                <div className="flex-1 relative aspect-[1/1] hidden md:block">
                    <Image
                        src="/images/join-as-a-courier/delivery-truck.png"
                        alt="Delivery Truck"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default JoinAsACourier;
