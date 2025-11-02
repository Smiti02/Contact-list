import React, { useState } from "react";

function AddContactForm({ onAddContact }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email)
      return alert("Please fill all fields");
    onAddContact(formData);
    setFormData({ name: "", phone: "", email: "" });
    setShowForm(false);
  };

  return (
    <div className="mt-8">
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        {showForm ? "Cancel" : "+Add New Contact"}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-200"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-2 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mb-2 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full"
          >
            Save Contact
          </button>
        </form>
      )}
    </div>
  );
}

export default AddContactForm;
