import React from "react";

const MapComponent = () => {
  return (
    <div className="bg-card shadow-md border mt-2 mb-8 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15914.630222684098!2d39.554922611045896!3d-4.28656423099751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184045f950371c63%3A0xdd0680f05b13c443!2sUkunda!5e0!3m2!1sen!2ske!4v1723493496830!5m2!1sen!2ske"
        height={"450"}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0, width: "100%" }}
      ></iframe>
    </div>
  );
};

export default MapComponent;
