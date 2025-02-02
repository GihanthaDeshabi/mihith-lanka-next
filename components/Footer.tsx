"use client";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/21.jpg" 
          alt="Footer Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Company Info */}
            <div className="gap-10">
              <h3 className="text-2xl font-medium mb-6">Mihith Lanka Tours & Travels</h3>
              <p className="text-[#f3f3f3] mb-6">
                Making your travel dreams come true with unforgettable experiences and 
                personalized service since 2009.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#f3f3f3] transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#f3f3f3] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#f3f3f3] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#f3f3f3] transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-[#f3f3f3] hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#f3f3f3] hover:text-white transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#f3f3f3] hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#f3f3f3] hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1" />
                  <p className="text-[#f3f3f3]">
                  Waligama, Matara, Sri Lanka
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <p className="text-[#f3f3f3]">+94 77 728 8286</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <p className="text-[#f3f3f3]">mihithlankatourstravels@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            {/* <div>
              <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
              <p className="text-[#f3f3f3] mb-4">
                Subscribe to our newsletter for travel tips and exclusive offers
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-black py-2 rounded-lg hover:bg-[#f3f3f3] transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-[#f3f3f3]">
              © {new Date().getFullYear()} MIHITH LANKA TOURS & TRAVELS. All Rights Reserved | Crafted by Syncos Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;