import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import AddContactForm from "./components/AddContactForm";
import Loader from "./components/Loader";
import contactsData from "./data";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load contacts (with simulated delay)
  useEffect(() => {
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      try {
        const saved = localStorage.getItem("contacts");
        if (saved) {
          setContacts(JSON.parse(saved));
        } else {
          setContacts(contactsData);
        }
      } catch {
        setError("Failed to fetch contacts. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Save contacts to localStorage
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  // Add new contact
  const handleAddContact = (newContact) => {
    const updatedContacts = [
      ...contacts,
      { id: contacts.length + 1, ...newContact },
    ];
    setContacts(updatedContacts);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="text-center text-red-500 bg-red-50 border border-red-200 rounded-lg p-4">
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            <ContactList contacts={contacts} />
            <div class="app-container">
              <AddContactForm onAddContact={handleAddContact} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;



