import Link from 'next/link';

export const metadata = {
    title: 'Our Services',
    description: 'Explore the comprehensive export and wholesale services offered by Abhimanyu Three Limited.'
};

export default function ServicesPage() {
    const services = [
        {
            title: 'International Export',
            icon: '🌍',
            description: 'Seamless export solutions to over 50 countries worldwide. We handle all documentation, customs clearance, and regulatory compliance.',
            features: [
                'Export documentation handling',
                'Customs clearance assistance',
                'Regulatory compliance support',
                'Multi-country shipping options',
                'Trade compliance consulting'
            ]
        },
        {
            title: 'Wholesale Distribution',
            icon: '📦',
            description: 'Bulk orders at competitive wholesale prices. Perfect for retailers, distributors, and large-scale buyers.',
            features: [
                'Competitive bulk pricing',
                'Flexible order quantities',
                'Regular supply contracts',
                'Volume-based discounts',
                'Priority fulfillment'
            ]
        },
        {
            title: 'Quality Assurance',
            icon: '✓',
            description: 'Rigorous quality control at every stage. All products are inspected and certified to meet international standards.',
            features: [
                'Pre-shipment inspection',
                'ISO certified processes',
                'Quality documentation',
                'Third-party testing',
                'Certification support'
            ]
        },
        {
            title: 'Logistics & Shipping',
            icon: '🚢',
            description: 'End-to-end logistics management including warehousing, shipping, and real-time tracking.',
            features: [
                'Sea, air, and land freight',
                'Warehouse management',
                'Real-time shipment tracking',
                'Packaging solutions',
                'Insurance options'
            ]
        },
        {
            title: 'Supply Chain Management',
            icon: '🔗',
            description: 'Optimize your supply chain with our comprehensive management solutions and vendor network.',
            features: [
                'Vendor sourcing',
                'Inventory management',
                'Demand forecasting',
                'Cost optimization',
                'Risk mitigation'
            ]
        },
        {
            title: 'Custom Solutions',
            icon: '⚙️',
            description: 'Tailored solutions designed to meet your specific business requirements and market needs.',
            features: [
                'Private labeling',
                'Custom packaging',
                'Product customization',
                'Market-specific adaptation',
                'Dedicated account management'
            ]
        }
    ];

    const processSteps = [
        {
            step: 1,
            title: 'Inquiry',
            description: 'Submit your requirements through our contact form or reach out directly to our team.'
        },
        {
            step: 2,
            title: 'Consultation',
            description: 'Our experts analyze your needs and provide tailored solutions and pricing.'
        },
        {
            step: 3,
            title: 'Agreement',
            description: 'Finalize terms, pricing, and delivery schedules with transparent documentation.'
        },
        {
            step: 4,
            title: 'Fulfillment',
            description: 'We handle procurement, quality checks, and prepare your order for shipment.'
        },
        {
            step: 5,
            title: 'Delivery',
            description: 'Track your shipment in real-time until it reaches your destination safely.'
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-800 via-indigo-900 to-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Comprehensive export and wholesale solutions designed to help your business
                        succeed in the global marketplace. From sourcing to delivery, we've got you covered.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-blue-800 rounded-lg p-8 hover:bg-blue-700 transition">
                                <div className="text-5xl mb-6">{service.icon}</div>
                                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                                <p className="text-blue-100 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-blue-200">
                                            <span className="text-amber-400">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-gradient-to-r from-indigo-900 to-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">How It Works</h2>
                    <p className="text-blue-200 text-center mb-12 max-w-2xl mx-auto">
                        Our streamlined process ensures a smooth experience from initial inquiry to final delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex-1 text-center relative">
                                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-blue-900">{step.step}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-blue-200 text-sm">{step.description}</p>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden sm:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-amber-500/30"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="bg-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Industries We Serve</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { icon: '🥘', name: 'Food & Beverage' },
                            { icon: '👗', name: 'Textiles' },
                            { icon: '💊', name: 'Pharmaceuticals' },
                            { icon: '🏭', name: 'Manufacturing' },
                            { icon: '🌾', name: 'Agriculture' },
                            { icon: '💄', name: 'Cosmetics' }
                        ].map((industry, index) => (
                            <div key={index} className="bg-blue-800 rounded-lg p-6 text-center hover:bg-blue-700 transition">
                                <div className="text-4xl mb-3">{industry.icon}</div>
                                <p className="font-medium">{industry.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-amber-500 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-blue-800 text-lg mb-8">
                        Contact us today to discuss your export and wholesale needs.
                        Our team is ready to help you succeed in global markets.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn btn-lg bg-blue-900 text-white hover:bg-blue-800">
                            Request a Quote
                        </Link>
                        <Link href="/products" className="btn btn-lg bg-transparent border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                            View Products
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
