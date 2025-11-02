import React from "react";
import { User, Phone, Mail } from "lucide-react";

function ContactCard({ contact }) {
  const { name, phone, email } = contact;

  return (
    <div className="bg-blue-50 p-4 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-2">
        <User className="text-blue-500" />
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      </div>
      <p className="flex items-center gap-2 text-gray-600"><Phone size={16}/> {phone}</p>
      <p className="flex items-center gap-2 text-gray-600"><Mail size={16}/> {email}</p>
    </div>
  );
}

export default ContactCard;
