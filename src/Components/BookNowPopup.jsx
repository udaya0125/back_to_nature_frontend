import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, User } from 'lucide-react';

const BookNowPopup = ({ 
  packageName = "Tour Package", 
  isOpen, 
  onClose 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    people: ''
  });

  // WhatsApp number (include country code without + or spaces)
  const WHATSAPP_NUMBER = '9840097901';

  const handleSubmit = () => {
    if (!formData.name || !formData.date || !formData.people) {
      alert('Please fill in all fields');
      return;
    }
    
    // Create a more compatible WhatsApp message
    const message = `New Tour Booking Request\n\nPackage: ${packageName}\nName: ${formData.name}\nDate: ${formData.date}\nNumber of People: ${formData.people}\n\nPlease confirm availability.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create URLs for both web and app
    const webUrl = `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    const appUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    
    // Try to detect if user is on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile devices, use api.whatsapp.com which works better with the app
      window.open(appUrl, '_blank');
    } else {
      // For desktop, use web.whatsapp.com but provide fallback
      const whatsappWindow = window.open(webUrl, '_blank');
      
      // Fallback: if the web version doesn't work, offer the app version
      setTimeout(() => {
        if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed == 'undefined') {
          // If popup was blocked or closed, offer alternative
          if (confirm('WhatsApp Web not opened. Would you like to try opening in WhatsApp app instead?')) {
            window.open(appUrl, '_blank');
          }
        }
      }, 1000);
    }
    
    // Reset form and close popup
    setFormData({ name: '', date: '', people: '' });
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Close popup when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close popup on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1"
          aria-label="Close booking popup"
        >
          <X size={20} />
        </button>

        {/* Popup Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Book Your Tour</h3>
          <p className="text-[#00304a] font-semibold mb-6">{packageName}</p>

          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User size={16} className="inline mr-2" />
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Date Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar size={16} className="inline mr-2" />
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
                required
              />
            </div>

            {/* Number of People Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users size={16} className="inline mr-2" />
                Number of People
              </label>
              <input
                type="number"
                name="people"
                value={formData.people}
                onChange={handleChange}
                min="1"
                max="50"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
                placeholder="Enter number of people"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 mt-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Send to WhatsApp
            </button>

            {/* Additional Info */}
            <p className="text-xs text-gray-500 text-center mt-4">
              You'll be redirected to WhatsApp to complete your booking
            </p>
            
            {/* WhatsApp Help Text */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4">
              <p className="text-xs text-yellow-800">
                <strong>Note:</strong> If the message doesn't appear when switching to the WhatsApp app, 
                you may need to manually copy and paste the booking details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNowPopup;