'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/services', label: 'Services' },
        { href: '/products', label: 'Products' },
        { href: '/contact', label: 'Contact' }
    ];

    return (
        <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 border-b-4 border-amber-500">
            {/* Top Bar */}
            <div className="bg-amber-600 text-white text-sm py-2">
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                    <span>Your Trusted Export Partner Since 2010</span>
                    <div className="hidden sm:flex gap-4">
                        <span>info@abimanyuthree.com</span>
                        <span>|</span>
                        <span>+1 (555) 123-4567</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="max-w-6xl mx-auto px-6 py-6">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-4 no-underline hover:opacity-100">
                        <Image
                            src="/abhimanyu-logo.jpeg"
                            alt="Abhimanyu 3 Logo"
                            width={64}
                            height={64}
                            className="rounded-lg"
                        />
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight m-0">
                                Abhimanyu Three Limited
                            </h1>
                            <p className="text-amber-400 text-sm italic mt-1">Your wholesale partner in purity</p>
                        </div>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="sm:hidden p-2 text-white hover:text-amber-400 transition"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden sm:flex gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white no-underline hover:text-amber-400 transition font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="sm:hidden mt-4 pt-4 border-t border-blue-700">
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-white no-underline hover:text-amber-400 transition font-medium py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
