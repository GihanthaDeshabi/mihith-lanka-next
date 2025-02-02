"use client";
import { useState } from 'react';
import { Calendar, Users, Mail, Phone, User, MessageSquare, Clock } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    persons: '',
    days: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR-WEB3FORMS-ACCESS-KEY', // Replace with your Web3Forms access key
          ...formData
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          persons: '',
          days: '',
          message: ''
        });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 text-center mb-6 mt-12">Book Your Dream Vacation</h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto">
            Ready to start your adventure? Fill out the form below and our travel experts 
            will get back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-12 bg-[#f3f3f3] rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">Thank You!</h3>
            <p className="text-[#4A4A4A] mb-6">
              Your booking request has been received. We'll contact you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-[#4A4A4A] transition-colors duration-300"
            >
              Book Another Trip
            </button>
          </div>
        ) : (
          <div className="bg-[#F0F0EC] p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Name Input */}
                  <div className="bg-white p-4 rounded-lg">
                    <label className="block text-[#4A4A4A] mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4A4A4A]" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#f3f3f3] rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="bg-white p-4 rounded-lg">
                    <label className="block text-[#4A4A4A] mb-2" htmlFor="email">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4A4A4A]" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#f3f3f3] rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="bg-white p-4 rounded-lg">
                    <label className="block text-[#4A4A4A] mb-2" htmlFor="phone">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4A4A4A]" size={20} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#f3f3f3] rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Date Input */}
                  <div className="bg-white p-4 rounded-lg">
                    <label className="block text-[#4A4A4A] mb-2" htmlFor="date">
                      Preferred Travel Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4A4A4A]" size={20} />
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#f3f3f3] rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  {/* Number of Persons */}
                  <div className="bg-white p-4 rounded-lg">
                    <label className="block text-[#4A4A4A] mb-2" htmlFor="persons">
                      Number of Travelers *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4A4A4A]" size={20} />
                      <input
                        type="number"
                        id="persons"
                        name="persons"
                        required
                        min="1"
                        value={formData.persons}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#f3f3f3] rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="2"
                      />
                    </div>
                  </div>

                  {/* Number of Days - New Field */}
                  <div className="bg-white p-4 rounded-lg">
                    <label className="block text-[#4A4A4A] mb-2" htmlFor="days">
                      Number of Days *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4A4A4A]" size={20} />
                      <input
                        type="number"
                        id="days"
                        name="days"
                        required
                        min="1"
                        value={formData.days}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#f3f3f3] rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="7"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Box */}
              <div className="bg-white p-4 rounded-lg max-w-4xl mx-auto mb-8">
                <label className="block text-[#4A4A4A] mb-2" htmlFor="message">
                  Special Requirements
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-[#4A4A4A]" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full pl-12 pr-4 py-3 bg-[#f3f3f3] rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Tell us about any special requirements or preferences..."
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center mb-4">{error}</p>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black text-white px-12 py-3 rounded-lg hover:bg-[#4A4A4A] transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Book Now'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingForm;