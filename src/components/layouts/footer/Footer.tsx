import styles from "@/styles/layouts/Footer.module.scss";
import BeforeFooter from "./BeforeFooter";
import Link from "next/link";
import FooterLogo from "./FooterLogo";

const Footer: React.FC = () => {
    return (
        <>
            <BeforeFooter />
            <footer className="bg-footer px-16 pt-10 pb-16 text-white">
                <div className="block sm:hidden">
                    <FooterLogo />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-start">
                    <div>
                        <div className="hidden sm:block">
                            <FooterLogo />
                        </div>
                        <h6 className={styles.footer__listHeading}>About</h6>
                        <ul className={styles.footer__list}>
                            <li><Link href="/">Our story</Link></li>
                            <li><Link href="/">Mission & Vision</Link></li>
                            <li><Link href="/">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className={styles.footer__listHeading}>Services</h6>
                        <ul className={styles.footer__list}>
                            <li><Link href="/">Shipping Rates</Link></li>
                            <li><Link href="/">Track Package</Link></li>
                            <li><Link href="/">Become a Courier</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className={styles.footer__listHeading}>Support</h6>
                        <ul className={styles.footer__list}>
                            <li><Link href="/">FAQs</Link></li>
                            <li><Link href="/">Customer Service</Link></li>
                            <li><Link href="/">Policies</Link></li>
                        </ul>
                    </div>
                </div>
                <p className="mt-12 text-center">@2025 EuroCollis. All rights reserved. | Privacy Policy | Terms of Service</p>
            </footer>
        </>
    )
}

export default Footer;