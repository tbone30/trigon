import React from 'react';
import { Trophy, Heart, Star, BookOpen } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-red-700 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Trigon Engineering Society</h1>
          <div className="space-x-6">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="/about" className="hover:text-gray-200">About</a>
            <a href="#" className="hover:text-gray-200">Events</a>
            <a href="#" className="hover:text-gray-200">Brothers</a>
            <a href="#" className="hover:text-gray-200">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-red-800 text-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-xl max-w-2xl mx-auto">Founded in [Year], our chapter has been building leaders and fostering brotherhood for over [X] years.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* History Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-6">Our History</h3>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-4">
              [Your fraternity name] was founded on the principles of leadership, scholarship, and service. 
              Our chapter was established at [University Name] in [Year], becoming the [X]th chapter nationwide.
            </p>
            <p className="text-gray-600">
              Since our founding, we have initiated over [X] brothers who have gone on to become leaders
              in their communities, professions, and industries. Our rich tradition of excellence continues
              to shape the future of our brotherhood.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-6">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Trophy className="w-8 h-8 text-red-600 mb-2" />
              <h4 className="text-xl font-bold mb-2">Leadership</h4>
              <p className="text-gray-600">Developing the next generation of leaders through mentorship and opportunity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="w-8 h-8 text-red-600 mb-2" />
              <h4 className="text-xl font-bold mb-2">Scholarship</h4>
              <p className="text-gray-600">Promoting academic excellence and intellectual growth among our brothers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="w-8 h-8 text-red-600 mb-2" />
              <h4 className="text-xl font-bold mb-2">Brotherhood</h4>
              <p className="text-gray-600">Creating lifelong bonds through shared experiences and mutual support.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Star className="w-8 h-8 text-red-600 mb-2" />
              <h4 className="text-xl font-bold mb-2">Service</h4>
              <p className="text-gray-600">Giving back to our community through volunteer work and philanthropy.</p>
            </div>
          </div>
        </div>

        {/* Current Leadership */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-6">Chapter Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['President', 'Vice President', 'Treasurer', 'Secretary', 'Rush Chair', 'Social Chair'].map((position) => (
              <div key={position} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">{position}</h4>
                <p className="text-gray-600">[Name]</p>
                <p className="text-red-600">[Class of YYYY]</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;