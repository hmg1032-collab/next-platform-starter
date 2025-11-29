import Link from 'next/link';

export default function Page() {
    const services = [
        {
            title: 'Global Export',
            description: 'We export premium quality products to over 50 countries worldwide.',
            icon: '🌍'
        },
        {
            title: 'Wholesale Supply',
            description: 'Bulk orders at competitive prices with reliable delivery schedules.',
            icon: '📦'
        },
        {
            title: 'Quality Assurance',
            description: 'Rigorous quality control ensuring every product meets international standards.',
            icon: '✓'
        },
        {
            title: 'Logistics Support',
            description: 'End-to-end logistics management for seamless international shipping.',
            icon: '🚢'
        }
    ];

    const stats = [
        { value: '15+', label: 'Years Experience' },
        { value: '50+', label: 'Countries Served' },
        { value: '1000+', label: 'Happy Clients' },
        { value: '10M+', label: 'Products Exported' }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-800 via-indigo-900 to-blue-900 py-20 sm:py-32">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
                            Your Trusted Partner in{' '}
                            <span className="text-amber-400">Global Export</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8">
                            Abhimanyu Three Limited connects quality manufacturers with markets worldwide.
                            We specialize in wholesale export solutions with a commitment to excellence and purity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="btn btn-lg bg-amber-500 hover:bg-amber-600 text-blue-900">
                                Get Started
                            </Link>
                            <Link href="/services" className="btn btn-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900">
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900 to-transparent"></div>
            </section>

            {/* Stats Section */}
            <section className="bg-amber-500 py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl sm:text-5xl font-bold text-blue-900">{stat.value}</div>
                                <div className="text-blue-800 font-medium mt-2">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
                        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                            Comprehensive export solutions tailored to meet your business needs
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-blue-800 rounded-lg p-6 hover:bg-blue-700 transition">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-blue-200">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/services" className="btn btn-lg">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="bg-gradient-to-r from-indigo-900 to-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid sm:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Why Choose Abhimanyu Three Limited?
                            </h2>
                            <p className="text-blue-100 mb-6 text-lg">
                                With over 15 years of experience in international trade, we have built
                                a reputation for reliability, quality, and exceptional service.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="text-amber-400 text-xl">✓</span>
                                    <span>Certified quality products meeting international standards</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-amber-400 text-xl">✓</span>
                                    <span>Competitive wholesale pricing for bulk orders</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-amber-400 text-xl">✓</span>
                                    <span>Reliable shipping and logistics network</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-amber-400 text-xl">✓</span>
                                    <span>Dedicated customer support team</span>
                                </li>
                            </ul>
                            <Link href="/about" className="btn btn-lg">
                                Learn More About Us
                            </Link>
                        </div>
                        <div className="bg-blue-800 rounded-lg p-8 text-center">
                            <div className="text-6xl mb-4">🏆</div>
                            <h3 className="text-2xl font-bold mb-4">Excellence in Export</h3>
                            <p className="text-blue-200">
                                Recognized for outstanding contribution to international trade
                                and commitment to quality standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-amber-500 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                        Ready to Expand Your Business Globally?
                    </h2>
                    <p className="text-blue-800 text-lg mb-8">
                        Partner with Abhimanyu Three Limited for reliable export solutions.
                        Contact us today to discuss your requirements.
                    </p>
                    <Link href="/contact" className="btn btn-lg bg-blue-900 text-white hover:bg-blue-800">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
}
