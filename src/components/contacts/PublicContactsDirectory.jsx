import React, { useState } from "react";
import { Search } from "lucide-react";
import { FiUser } from "react-icons/fi";

const ContactPublicContactsDirectory = () => {
  const contacts = [
    { id: "Jeddah  |  PROP25-328", name: "Movenpick Jeddah Al Nawras" },
    { id: "Jeddah  |  PROP25-327", name: "Atelier La View Center" },
    { id: "Chennai  |  PROP25-324", name: "Serenity Towers" },
    { id: "Kancheepuram  |  PROP24-323", name: "verzon properties" },
    { id: "Chennai  |  PROP24-300", name: "Commercial" },
  ];
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  
  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 border-b">
            <div className="text-xl font-semibold">Public Contacts Directory</div>
            <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                    <FiUser className="text-gray-500 mr-2" />
                    <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
                        <option value="">Business Development</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="flex h-screen p-4 bg-gray-100">
            
            <div className="w-1/4 bg-white shadow rounded-lg overflow-hidden">
                <div className="text-xl font-semibold border-b p-4">Properties</div>
                <div className="p-2 border rounded-md shadow-sm bg-gray-50 w-[300px] mt-2">
                    <input placeholder="Search Properties" icon={<Search size={16} />} />
                </div>
                {contacts.map((contact) => (
                    <div
                    key={contact.id}
                    className={`p-4 mt-2 cursor-pointer flex items-center gap-3 border-b ${selectedContact.id === contact.id ? "bg-blue-100" : "hover:bg-gray-100"}`}
                    onClick={() => setSelectedContact(contact)}
                    >
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white rounded-full">
                            {contact.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <p className="font-medium">{contact.name}</p>
                            <p className="text-xs text-gray-500">{contact.id}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex-1 bg-white shadow rounded-lg ml-4 p-6">

                <div className="">

                    <div className="p-2 border rounded-md shadow-sm bg-gray-50 w-[300px] mt-2">
                        <input placeholder="Search Contacts" icon={<Search size={16} />} />
                    </div>

                    <div className="mt-4">No public directories to show</div>

                </div>
            </div>
        </div>

    </div>
  );
};

export default ContactPublicContactsDirectory;
