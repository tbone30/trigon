import React from 'react';
import { Calendar, Users, Image, Mail } from 'lucide-react';
import Navbar from './components/navbar.js';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      {/* Hero Section */}
      <div className="bg-red-800 text-white py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Brotherhood</h2>
          <p className="text-xl mb-8">Brotherhood • Social • Service</p>
          <button className="bg-white text-red-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Event Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Calendar className="w-8 h-8 text-red-600 mb-2" />
            <h3 className="text-xl font-bold mb-2">Upcoming Events</h3>
            <p className="text-gray-600">Stay updated with our latest brotherhood events and social gatherings.</p>
          </div>

          {/* Brothers Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-8 h-8 text-red-600 mb-2" />
            <h3 className="text-xl font-bold mb-2">Our Brothers</h3>
            <p className="text-gray-600">Meet our active members and learn about our distinguished alumni.</p>
          </div>

          {/* Gallery Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image className="w-8 h-8 text-red-600 mb-2" />
            <h3 className="text-xl font-bold mb-2">Photo Gallery</h3>
            <p className="text-gray-600">Browse through memories of our brotherhood events and activities.</p>
          </div>

          {/* Contact Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Mail className="w-8 h-8 text-red-600 mb-2" />
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-600">Reach out to learn more about joining or connecting with our chapter.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;