'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const contactInfo = [
        {
            icon: '📍',
            title: 'Head Office',
            details: ['123 Export Tower, Business District', 'Mumbai, Maharashtra 400001', 'India']
        },
        {
            icon: '📞',
            title: 'Phone',
            details: ['+44 7341652445', 'Mon-Fri: 9AM - 6PM']
        },
        {
            icon: '✉️',
            title: 'Email',
            details: ['abimanyu3wholesale@gmail.com']
        },
        {
            icon: '🌐',
            title: 'Regional Offices',
            details: ['London, United Kingdom', 'Dubai, UAE', 'New York, USA']
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-800 via-indigo-900 to-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Get in touch with our team to discuss your export requirements.
                        We're here to help you succeed in global markets.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="bg-blue-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-blue-800 rounded-lg p-8">
                            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">✅</div>
                                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                    <p className="text-blue-200">
                                        Your message has been received. Our team will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
                                        }}
                                        className="btn mt-6"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="input w-full"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="input w-full"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Company Name</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="input w-full"
                                                placeholder="Your company"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="input w-full"
                                                placeholder="+1 234 567 8900"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Subject *</label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="input w-full"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="quote">Request a Quote</option>
                                            <option value="products">Product Information</option>
                                            <option value="partnership">Business Partnership</option>
                                            <option value="support">Customer Support</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Message *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="input w-full"
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-lg w-full bg-amber-500 text-blue-900 hover:bg-amber-600"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            {contactInfo.map((info, index) => (
                                <div key={index} className="bg-blue-800 rounded-lg p-6 flex gap-4">
                                    <div className="text-3xl">{info.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                                        {info.details.map((detail, idx) => (
                                            <p key={idx} className="text-blue-200">{detail}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Business Hours */}
                            <div className="bg-amber-500 rounded-lg p-6 text-blue-900">
                                <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="font-medium">10:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="font-medium">Closed</span>
                                    </div>
                                </div>
                                <p className="text-sm mt-4 text-blue-800">
                                    * All times are in IST (Indian Standard Time)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gradient-to-r from-indigo-900 to-blue-900 py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: 'What are your minimum order quantities?',
                                a: 'Minimum order quantities vary by product category. Generally, we work with MOQs starting from 100 units for handicrafts to 1 metric ton for bulk commodities. Contact us for specific product requirements.'
                            },
                            {
                                q: 'Do you ship worldwide?',
                                a: 'Yes, we export to over 50 countries across all continents. We handle all export documentation and can ship via sea, air, or land depending on your location and requirements.'
                            },
                            {
                                q: 'What payment methods do you accept?',
                                a: 'We accept bank transfers (T/T), Letters of Credit (L/C), and other secure international payment methods. Payment terms can be discussed based on order value and relationship.'
                            },
                            {
                                q: 'How can I become a distributor?',
                                a: 'We welcome partnership inquiries from distributors worldwide. Please contact us with details about your business, target market, and product interests, and our team will get in touch.'
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-blue-800 rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                                <p className="text-blue-200">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
