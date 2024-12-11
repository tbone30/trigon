'use client';
import Link from 'next/link';

function Navbar() {
  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/events', text: 'Events' },
    { href: '/brothers', text: 'Brothers' },
    { href: '/contact', text: 'Contact' }
  ];

  return (
    <nav className="bg-red-700 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Trigon Engineering Society</h1>
        <div className="space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="hover:text-gray-200"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;