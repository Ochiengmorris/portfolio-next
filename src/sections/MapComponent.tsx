const MapComponent = () => {
  return (
    <div className="bg-card shadow-md rounded-xl border mt-2 mb-8 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35371.43617540823!2d36.777537955563794!3d-1.340749426422427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1737622180808!5m2!1sen!2ske"
        width="600"
        height="450"
        style={{ border: 0, width: "100%" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
