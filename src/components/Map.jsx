"use client";

import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <iframe
        title="Akshaya Robotics Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3907005195283!2d78.37991457462815!3d17.4410044012594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb932ecd575185%3A0x579e0ed2a9ab3933!2sMy%20School%20ITALY%20%7C%20Mind%20Space!5e0!3m2!1sen!2sin!4v1774978059993!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, width: '100%', height: '100%', filter: 'saturate(1.5) contrast(1.2)' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
