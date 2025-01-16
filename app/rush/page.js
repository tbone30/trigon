import React from 'react';
import { Trophy, Heart, Star, BookOpen } from 'lucide-react';
import Navbar from '../components/navbar.js';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>

      {/* Hero Section */}
      <div className="bg-red-800 text-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Trigon Rush</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* History Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-black mb-6">What is Trigon?</h3>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-4">
              Brief description of Trigon 
            </p>
            <p className="text-gray-600">
              Another paragraph describing us
            </p>
          </div>
        </div>

        {/* SCHEDULE INFO GRID */}
        <div className="mb-16">
            <h3 className="text-3xl font-bold text-black mb-6">Rush Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-black">Engineering Expo</h4>
                    <h5 className="text-m text-black">Darden Courtyard</h5>
                    <h5 className="text-m text-black mb-2">
                        Friday, Oct. 25  
                        12 pm – 3 pm
                    </h5>
                    <p className="text-gray-600">Developing the next generation of leaders through mentorship and opportunity.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-black">Bodo's Bagels</h4>
                    <h5 className="text-m text-black">Darden Courtyard</h5>
                    <h5 className="text-m text-black mb-2">
                        Monday, Sept. 2  
                        9 am – 12 pm
                    </h5>
                    <p className="text-gray-600">Developing the next generation of leaders through mentorship and opportunity.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-black">7 Deadly Sins Progressive</h4>
                    <h5 className="text-m text-black">Trigon House, 121 Shamrock Road</h5>
                    <h5 className="text-m text-black mb-2">
                        Friday, Sept. 6
                        10 pm
                    </h5>
                    <p className="text-gray-600">Developing the next generation of leaders through mentorship and opportunity.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-black">Canes and Games on the Lawn</h4>
                    <h5 className="text-m text-black">Lawn Room 17 West</h5>
                    <h5 className="text-m text-black mb-2">
                        Wednesday, Sept. 11
                        5 pm – 9 pm
                    </h5>
                    <p className="text-gray-600">Developing the next generation of leaders through mentorship and opportunity.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-black">Around the World Progressive</h4>
                    <h5 className="text-m text-black">Trigon House, 121 Shamrock Road</h5>
                    <h5 className="text-m text-black mb-2">
                        Friday, Sept. 13
                        10pm
                    </h5>
                    <p className="text-gray-600">Developing the next generation of leaders through mentorship and opportunity.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-black">UVA vs UMD Tailgate</h4>
                    <h5 className="text-m text-black">Trigon House, 121 Shamrock Road</h5>
                    <h5 className="text-m text-black mb-2">
                        Saturday, Sept. 14
                        5 pm
                    </h5>
                    <p className="text-gray-600">Developing the next generation of leaders through mentorship and opportunity.</p>
                </div>
            </div>
        </div>

        {/*
        {/* SCHEDULE INFO 
        <div className="flex">
            {/* RUSH CALENDAR 
            <div className="pb-12">
                <h3 className="text-3xl font-bold text-black mb-6">Rush Schedule</h3>
                <div className="relative h-[600px] w-[400px] text-white">
                    <div 
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: "url('/trigon-rush-schedule-fall-2024.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </div>
            </div>
            {/* EVENT INFO 
            <div className="w-full flex justify-end">
                <h3 className="text-3xl font-bold text-black mb-6">Event Info</h3>
            </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default AboutPage;