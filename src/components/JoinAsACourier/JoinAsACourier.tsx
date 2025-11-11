import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui';
import styles from './JoinAsACourier.module.scss';

const JoinAsACourier: React.FC = () => {
    return (
        <div className={styles.JoinAsACourier}>
            <div className='ps-10 md:ps-20 pt-10 pe-10 md:pe-0 flex items-center h-full'>
                <div className='flex-1 flex flex-col items-center md:items-start gap-7'>
                    <h1 className='text-center md:text-left'>Join as a Transporter</h1>
                    <Image
                        src="/images/join-as-a-courier/delivery-truck.png"
                        alt="Delivery Truck"
                        width={180}
                        height={180}
                        className="object-contain block md:hidden"
                    />
                    <p className='text-center md:text-left'>Become a trusted EuroCollis transporter and deliver packages between Morocco and Europe.</p>
                    <div className='flex flex-col gap-3 text-center md:text-left'>
                        <p className='text-sm flex items-center gap-2'>
                            <span className='text-lg'>🚚</span>
                            <span>Simple onboarding</span>
                        </p>
                        <p className='text-sm flex items-center gap-2'>
                            <span className='text-lg'>💸</span>
                            <span>Direct payment from customers</span>
                        </p>
                        <p className='text-sm flex items-center gap-2'>
                            <span className='text-lg'>🌍</span>
                            <span>Routes that fit your schedule</span>
                        </p>
                    </div>
                    <Link href="/for-couriers">
                        <Button className='!text-lg'>
                            Join as a Transporter
                        </Button>
                    </Link>
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
