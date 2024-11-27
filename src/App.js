import React, { useState } from "react";
import ContactSearch from "./components/ContactSearch";

function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSelectContact = (contact) => {
    setSelectedContact((prevContact) =>
      prevContact && prevContact.id === contact.id ? null : contact
    );
  };

  return (
    <div className="App container mt-4">
      <h1>Choose a Contact</h1>
      <ContactSearch onSelectContact={handleSelectContact} selectedContact={selectedContact} />
      
      {selectedContact && (
        <div className="card mt-4 mb-4">
          <div className="card-body">
            <h5 className="card-title">Selected Contact</h5>
            <p><b>Name:</b> {selectedContact.firstName} {selectedContact.lastName}</p>
            <p><b>Email:</b> {selectedContact.email}</p>
            <p><b>Phone:</b> {selectedContact.phone}</p>
            <p><b>Address:</b> {selectedContact.address}, {selectedContact.city}, {selectedContact.state} {selectedContact.zip}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
