import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaUser } from "react-icons/fa";

const ContactList = ({ contacts }) => {
  const [search, setSearch] = useState("");

  // Filter contacts received from parent (App.jsx)
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1 className="app-title">
        <FaPhone /> Contact List
      </h1>

      <input
        type="text"
        className="search-input"
        placeholder="Search contact by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="contact-grid">
        {filteredContacts.map((contact) => (
          <div key={contact.id} className="contact-card">
            <FaUser className="icon" />
            <h2 className="contact-name">{contact.name}</h2>
            <p className="contact-detail">
              <FaPhone /> {contact.phone}
            </p>
            <p className="contact-detail">
              <FaEnvelope /> {contact.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;





