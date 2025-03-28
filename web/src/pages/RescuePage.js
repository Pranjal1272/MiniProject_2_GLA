"use client"

import React, { useState } from "react";
import "../pages/RescuePage.css";

const RescuePage = () => {
  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    location: "",
    description: "",
    contact: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rescue Request Submitted:", formData);
    
    if (formData.image) {
      console.log("Uploaded Image:", formData.image.name);
    }

    alert("Rescue request submitted successfully!");
    
    setFormData({
      petName: "",
      petType: "",
      location: "",
      description: "",
      contact: "",
      image: null,
    });
  };

  return (
    <div className="rescue-container">
      <h2 className="rescue-heading">Report a Pet for Rescue</h2>
      <form className="rescue-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="petName"
          placeholder="Pet's Name"
          value={formData.petName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="petType"
          placeholder="Pet Type (e.g., Dog, Cat)"
          value={formData.petType}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Your Contact Details"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Additional Details"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <button type="submit">Submit Rescue Request</button>
      </form>

      {formData.image && (
        <div className="image-preview">
          <h4>Image Preview:</h4>
          <img
            src={URL.createObjectURL(formData.image)}
            alt="Pet Preview"
          />
        </div>
      )}
    </div>
  );
};


export default RescuePage;
