import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/services', label: 'Services' },
        { href: '/products', label: 'Products' },
        { href: '/contact', label: 'Contact' }
    ];

    const services = [
        'International Export',
        'Wholesale Distribution',
        'Quality Assurance',
        'Logistics Support',
        'Supply Chain Management'
    ];

    return (
        <footer className="bg-gradient-to-b from-blue-900 to-indigo-950 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6">
                {/* Footer Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Abhimanyu Three Limited</h3>
                        <p className="text-blue-200 mb-4">
                            Your trusted partner in global export. We connect quality products
                            with markets worldwide since 2010.
                        </p>
                        <p className="text-amber-400 italic">
                            "Your wholesale partner in purity"
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-blue-200 hover:text-amber-400 transition no-underline"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index} className="text-blue-200">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-blue-200">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-400">📍</span>
                                <span>123 Export Tower, Mumbai, India</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-400">📞</span>
                                <span>+44 7341652445</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-400">✉️</span>
                                <span>abimanyu3wholesale@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-blue-800 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-blue-300 text-sm">
                            &copy; {currentYear} Abhimanyu Three Limited. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-blue-300">
                            <Link href="/contact" className="hover:text-amber-400 transition no-underline">
                                Privacy Policy
                            </Link>
                            <Link href="/contact" className="hover:text-amber-400 transition no-underline">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
