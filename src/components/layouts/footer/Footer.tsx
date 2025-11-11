import styles from "@/styles/layouts/Footer.module.scss";
import BeforeFooter from "./BeforeFooter";
import Link from "next/link";
import FooterLogo from "./FooterLogo";

const Footer: React.FC = () => {
    return (
        <>
            <BeforeFooter />
            <footer className="bg-footer px-6 md:px-16 pt-10 pb-16 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start mb-8">
                        {/* 1. Brand & Mission */}
                        <div className="lg:col-span-1">
                            <div className="hidden sm:block mb-6">
                                <FooterLogo />
                            </div>
                            <h6 className={styles.footer__listHeading}>EuroCollis</h6>
                            <p className="text-sm text-gray-300 mb-4">
                                Bringing transporters and customers together — safe, simple, and trusted.
                            </p>
                            <div className="space-y-2 mb-4">
                                <p className="text-sm text-gray-300">
                                    <a href="mailto:support@eurocollis.com" className="hover:text-white transition">
                                        support@eurocollis.com
                                    </a>
                                </p>
                                <p className="text-sm text-gray-300">
                                    WhatsApp / +212 XXX XXX XXX
                                </p>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <a href="#" className="text-gray-300 hover:text-white transition">Facebook</a>
                                <span className="text-gray-500">|</span>
                                <a href="#" className="text-gray-300 hover:text-white transition">Instagram</a>
                                <span className="text-gray-500">|</span>
                                <a href="#" className="text-gray-300 hover:text-white transition">LinkedIn</a>
                            </div>
                        </div>

                        {/* 2. For Senders */}
                        <div>
                            <h6 className={styles.footer__listHeading}>For Senders</h6>
                            <ul className={styles.footer__list}>
                                <li><Link href="/quote">Get an Instant Quote</Link></li>
                                <li><Link href="/portal">Track My Parcel</Link></li>
                                <li><Link href="/portal">My Account</Link></li>
                                <li><Link href="/how-it-works">How It Works</Link></li>
                                <li><Link href="/help">Help & FAQs</Link></li>
                            </ul>
                        </div>

                        {/* 3. For Transporters */}
                        <div>
                            <h6 className={styles.footer__listHeading}>For Transporters</h6>
                            <ul className={styles.footer__list}>
                                <li><Link href="/for-couriers">Become a Transporter</Link></li>
                                <li><Link href="/portal">Manage My Trips</Link></li>
                                <li><Link href="/portal/profile">My Account</Link></li>
                                <li><Link href="/help">Payment & Policy Info</Link></li>
                                <li><Link href="/support">Courier Support</Link></li>
                            </ul>
                        </div>

                        {/* 4. About & Community */}
                        <div>
                            <h6 className={styles.footer__listHeading}>About & Community</h6>
                            <ul className={styles.footer__list}>
                                <li><Link href="/about-us">About EuroCollis</Link></li>
                                <li><Link href="/about-us">Benmira Foundation</Link></li>
                                <li><Link href="/about-us">Partnerships</Link></li>
                                <li><Link href="/contact-us">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* 5. Legal & Info */}
                        <div>
                            <h6 className={styles.footer__listHeading}>Legal & Info</h6>
                            <ul className={styles.footer__list}>
                                <li><Link href="/help">Terms of Service</Link></li>
                                <li><Link href="/help">Courier Terms & Conditions</Link></li>
                                <li><Link href="/help">Privacy Policy</Link></li>
                                <li><Link href="/help">Cookies & Data Use</Link></li>
                                <li><Link href="/help">Prohibited Items</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-700 pt-8 mt-8">
                        <p className="text-center text-sm text-gray-300">
                            © 2025 EuroCollis | Made with ❤️ in Morocco
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
