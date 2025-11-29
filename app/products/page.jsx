import Link from 'next/link';

export const metadata = {
    title: 'Our Products',
    description: 'Explore the wide range of quality export products offered by Abhimanyu Three Limited.'
};

export default function ProductsPage() {
    const categories = [
        {
            name: 'Food & Spices',
            icon: '🌶️',
            description: 'Premium spices, grains, pulses, and food products sourced from the finest producers.',
            products: ['Basmati Rice', 'Organic Spices', 'Lentils & Pulses', 'Tea & Coffee', 'Dried Fruits', 'Edible Oils']
        },
        {
            name: 'Textiles & Fabrics',
            icon: '🧵',
            description: 'High-quality textiles including cotton, silk, and specialty fabrics for global markets.',
            products: ['Cotton Fabrics', 'Silk Materials', 'Handloom Products', 'Technical Textiles', 'Home Furnishings', 'Yarn & Thread']
        },
        {
            name: 'Handicrafts & Decor',
            icon: '🎨',
            description: 'Authentic handcrafted products and home decor items showcasing traditional artistry.',
            products: ['Brass & Copper Items', 'Wooden Crafts', 'Ceramic Pottery', 'Handwoven Rugs', 'Metal Art', 'Decorative Items']
        },
        {
            name: 'Agricultural Products',
            icon: '🌾',
            description: 'Fresh and processed agricultural products meeting international quality standards.',
            products: ['Fresh Vegetables', 'Tropical Fruits', 'Organic Produce', 'Seeds & Grains', 'Processed Foods', 'Herbal Products']
        },
        {
            name: 'Industrial Goods',
            icon: '⚙️',
            description: 'Quality industrial materials and components for manufacturing sectors worldwide.',
            products: ['Raw Materials', 'Machine Parts', 'Industrial Chemicals', 'Packaging Materials', 'Tools & Equipment', 'Safety Gear']
        },
        {
            name: 'Health & Wellness',
            icon: '🌿',
            description: 'Natural health products, herbal supplements, and wellness items.',
            products: ['Ayurvedic Products', 'Herbal Supplements', 'Essential Oils', 'Natural Cosmetics', 'Health Foods', 'Wellness Items']
        }
    ];

    const featuredProducts = [
        {
            name: 'Premium Basmati Rice',
            category: 'Food & Spices',
            description: 'Long-grain aromatic rice, aged for perfect texture and flavor.',
            minOrder: '1 Metric Ton'
        },
        {
            name: 'Organic Turmeric Powder',
            category: 'Food & Spices',
            description: 'High curcumin content, certified organic, vibrant color.',
            minOrder: '500 kg'
        },
        {
            name: 'Handwoven Cotton Fabrics',
            category: 'Textiles',
            description: 'Traditional weaving techniques, premium quality cotton.',
            minOrder: '1000 meters'
        },
        {
            name: 'Brass Home Decor Set',
            category: 'Handicrafts',
            description: 'Artisan-crafted brass items, traditional designs.',
            minOrder: '100 pieces'
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-800 via-indigo-900 to-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Products</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Discover our extensive range of quality export products. From traditional spices
                        to modern industrial goods, we offer products that meet international standards.
                    </p>
                </div>
            </section>

            {/* Featured Products */}
            <section className="bg-amber-500 py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Featured Products</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                                <div className="bg-blue-100 rounded-lg p-4 mb-4 text-center">
                                    <span className="text-4xl">📦</span>
                                </div>
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                    {product.category}
                                </span>
                                <h3 className="text-lg font-bold text-blue-900 mt-2 mb-2">{product.name}</h3>
                                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                                <p className="text-xs text-gray-500">Min. Order: {product.minOrder}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="bg-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Product Categories</h2>
                    <p className="text-blue-200 text-center mb-12 max-w-2xl mx-auto">
                        We offer a diverse range of products across multiple categories to meet your business needs.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <div key={index} className="bg-blue-800 rounded-lg p-8 hover:bg-blue-700 transition">
                                <div className="text-5xl mb-4">{category.icon}</div>
                                <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                                <p className="text-blue-100 mb-6">{category.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {category.products.map((product, idx) => (
                                        <span key={idx} className="bg-blue-900 px-3 py-1 rounded-full text-sm text-blue-200">
                                            {product}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Standards */}
            <section className="bg-gradient-to-r from-indigo-900 to-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Quality Certifications</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { cert: 'ISO 9001:2015', desc: 'Quality Management System' },
                            { cert: 'ISO 22000', desc: 'Food Safety Management' },
                            { cert: 'FSSAI', desc: 'Food Safety Standards' },
                            { cert: 'Organic Certified', desc: 'For Organic Products' }
                        ].map((item, index) => (
                            <div key={index} className="bg-blue-800 rounded-lg p-6 text-center">
                                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">✓</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.cert}</h3>
                                <p className="text-blue-200 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ordering Information */}
            <section className="bg-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-blue-800 rounded-lg p-8 sm:p-12">
                        <div className="grid sm:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                                    Ordering Information
                                </h2>
                                <ul className="space-y-4 text-blue-100">
                                    <li className="flex items-start gap-3">
                                        <span className="text-amber-400 text-xl">📋</span>
                                        <span>Minimum order quantities vary by product category</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-amber-400 text-xl">💰</span>
                                        <span>Competitive wholesale pricing for bulk orders</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-amber-400 text-xl">📄</span>
                                        <span>Custom labeling and packaging available</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-amber-400 text-xl">🚚</span>
                                        <span>Worldwide shipping via sea, air, or land</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <p className="text-blue-200 mb-4">
                                    Need a detailed product catalog or specific pricing?
                                </p>
                                <Link href="/contact" className="btn btn-lg bg-amber-500 text-blue-900 hover:bg-amber-600">
                                    Request Product Catalog
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-amber-500 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                        Looking for Specific Products?
                    </h2>
                    <p className="text-blue-800 text-lg mb-8">
                        Can't find what you're looking for? Contact us with your requirements
                        and we'll help source the right products for your business.
                    </p>
                    <Link href="/contact" className="btn btn-lg bg-blue-900 text-white hover:bg-blue-800">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
