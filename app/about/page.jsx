import Link from 'next/link';

export const metadata = {
    title: 'About Us',
    description: 'Learn about Abhimanyu Three Limited - Our history, mission, values, and commitment to excellence in global export.'
};

export default function AboutPage() {
    const teamMembers = [
        {
            name: 'Abhimanyu Kumar',
            role: 'Founder & CEO',
            description: 'Over 20 years of experience in international trade and export management.'
        },
        {
            name: 'Priya Sharma',
            role: 'Operations Director',
            description: 'Expert in supply chain management and logistics optimization.'
        },
        {
            name: 'Raj Patel',
            role: 'Quality Assurance Head',
            description: 'Ensures all products meet international quality standards.'
        },
        {
            name: 'Sarah Johnson',
            role: 'International Sales Manager',
            description: 'Builds and maintains relationships with clients across 50+ countries.'
        }
    ];

    const milestones = [
        { year: '2010', event: 'Company founded in Mumbai, India' },
        { year: '2012', event: 'Expanded to 10 international markets' },
        { year: '2015', event: 'Achieved ISO 9001 certification' },
        { year: '2018', event: 'Opened regional offices in Europe and Americas' },
        { year: '2020', event: 'Reached 1000+ active clients milestone' },
        { year: '2023', event: 'Expanded product range to 500+ items' }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-800 via-indigo-900 to-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Abhimanyu Three Limited is a leading export company committed to connecting
                        quality products with global markets. Our dedication to excellence has made
                        us a trusted partner for businesses worldwide.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid sm:grid-cols-2 gap-12">
                        <div className="bg-blue-800 rounded-lg p-8">
                            <div className="text-4xl mb-4">🎯</div>
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-blue-100">
                                To bridge the gap between quality manufacturers and international markets
                                by providing reliable, efficient, and transparent export solutions. We strive
                                to be the preferred wholesale partner for businesses seeking purity and
                                excellence in their supply chain.
                            </p>
                        </div>
                        <div className="bg-blue-800 rounded-lg p-8">
                            <div className="text-4xl mb-4">🔭</div>
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-blue-100">
                                To become the world's most trusted export company, known for our
                                unwavering commitment to quality, customer satisfaction, and sustainable
                                business practices. We envision a connected global marketplace where
                                quality products reach every corner of the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="bg-gradient-to-r from-indigo-900 to-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-amber-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💎</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Quality</h3>
                            <p className="text-blue-200">Uncompromising standards in every product we export</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-amber-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Integrity</h3>
                            <p className="text-blue-200">Transparent and honest business relationships</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-amber-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Reliability</h3>
                            <p className="text-blue-200">Consistent delivery and dependable service</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-amber-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🌱</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                            <p className="text-blue-200">Environmentally responsible business practices</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Timeline */}
            <section className="bg-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Journey</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-500 hidden sm:block"></div>
                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                                    <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'}`}>
                                        <div className="bg-blue-800 rounded-lg p-6">
                                            <div className="text-amber-400 font-bold text-xl mb-2">{milestone.year}</div>
                                            <p className="text-blue-100">{milestone.event}</p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block w-4 h-4 bg-amber-500 rounded-full z-10"></div>
                                    <div className="flex-1 hidden sm:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-gradient-to-r from-indigo-900 to-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Leadership Team</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-blue-800 rounded-lg p-6 text-center">
                                <div className="w-24 h-24 bg-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-4xl text-blue-900 font-bold">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-amber-400 mb-3">{member.role}</p>
                                <p className="text-blue-200 text-sm">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-amber-500 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                        Want to Partner With Us?
                    </h2>
                    <p className="text-blue-800 text-lg mb-8">
                        Join our network of satisfied clients and experience the Abhimanyu Three difference.
                    </p>
                    <Link href="/contact" className="btn btn-lg bg-blue-900 text-white hover:bg-blue-800">
                        Contact Our Team
                    </Link>
                </div>
            </section>
        </div>
    );
}
