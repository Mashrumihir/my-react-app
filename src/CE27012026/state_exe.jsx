import React, { useState } from "react";

const ContactBook1 = () => {
  const [contacts, setContacts] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const addContact = () => {
    if (!fname.trim() || !lname.trim() || !phone.trim()) return;

    const newContact = {
      id: Date.now(),
      fname,
      lname,
      phone,
      visible: false,
    };

    setContacts([newContact, ...contacts]);
    setFname("");
    setLname("");
    setPhone("");
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  const toggleView = (id) => {
    setContacts(
      contacts.map((c) =>
        c.id === id ? { ...c, visible: !c.visible } : c
      )
    );
  };

  const editContact = (contact) => {
    setFname(contact.fname);
    setLname(contact.lname);
    setPhone(contact.phone);
    setIsEditing(true);
    setEditId(contact.id);
  };

  const updateContact = () => {
    if (!fname.trim() || !lname.trim() || !phone.trim()) return;

    setContacts(
      contacts.map((c) =>
        c.id === editId ? { ...c, fname, lname, phone } : c
      )
    );

    setFname("");
    setLname("");
    setPhone("");
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div>
      <h1>Contact Book</h1>

      <input
        type="text"
        value={fname}
        placeholder="First Name"
        onChange={(e) => setFname(e.target.value)}
      />
      <br />

      <input
        type="text"
        value={lname}
        placeholder="Last Name"
        onChange={(e) => setLname(e.target.value)}
      />
      <br />

      <input
        type="text"
        value={phone}
        placeholder="Mobile Number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />

      <button onClick={isEditing ? updateContact : addContact}>
        {isEditing ? "Update Contact" : "Add Contact"}
      </button>

      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            {c.fname}{" "}
            <button onClick={() => toggleView(c.id)}>View</button>
            <button onClick={() => editContact(c)}>Edit</button>
            <button onClick={() => deleteContact(c.id)}>Delete</button>

            {c.visible && (
              <div>
                {c.lname} - {c.phone}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactBook1;