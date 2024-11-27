import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons for pagination

const ContactSearch = ({ onSelectContact, selectedContact }) => {
  const [contacts] = useState(require("../data/contacts.json"));
  const [states] = useState(require("../data/states.json"))
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    streetAddress: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [page, setPage] = useState(0);
  const itemsPerPage = 5;
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearch = () => {
    let filtered = contacts.filter((contact) => {
      return (
        (!formData.firstName ||
          contact.firstName
            .toLowerCase()
            .includes(formData.firstName.toLowerCase())) &&
        (!formData.lastName ||
          contact.lastName
            .toLowerCase()
            .includes(formData.lastName.toLowerCase())) &&
        (!formData.dob || contact.dob.includes(formData.dob)) &&
        (!formData.email ||
          contact.email.toLowerCase().includes(formData.email.toLowerCase())) &&
        (!formData.phone || contact.phone.includes(formData.phone)) &&
        (!formData.streetAddress ||
          contact.address
            .toLowerCase()
            .includes(formData.streetAddress.toLowerCase())) &&
        (!formData.city ||
          contact.city.toLowerCase().includes(formData.city.toLowerCase())) &&
        (!formData.state ||
          contact.state.toLowerCase().includes(formData.state.toLowerCase())) &&
        (!formData.zipCode || contact.zip.includes(formData.zipCode))
      );
    });
    setFilteredContacts(filtered);
    setPage(0); // Reset pagination to the first page
  };

  const handlePageClick = (data) => setPage(data.selected);

  const displayContacts = filteredContacts.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <div>
      <div className="filters mb-4">
        <div className="row mb-12">
          <div className="col-md-2">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control border-input"
            />
          </div>
          <div className="col-md-2">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control border-input"
            />
          </div>
          <div className="col-md-2">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="form-control border-input"
            />
          </div>
          <div className="col-md-6">
            <label>Street Address</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="form-control border-input"
            />
          </div>
        </div>
        <div className="row mb-12">
          <div className="col-md-2">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control border-input"
            />
          </div>
          <div className="col-md-2">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control border-input"
            />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-control border-input"
            />
          </div>
          <div className="col-md-2">
            <label>State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="form-control border-input"
            >
              <option value="">Select State</option>
              {
                states.map(state =>{
                    return (
                        <option value={state.id}>{state.name}</option>
                    )
                })
              }
            </select>
          </div>
          <div className="col-md-2">
            <label>Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="form-control border-input"
            />
          </div>
        </div>
        <button onClick={handleSearch} className="btn btn-outline-primary mt-4">
          Search
        </button>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>DOB</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {displayContacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <input
                    type="checkbox"
                    name="selectedContact"
                    value={contact.id}
                    checked={selectedContact === contact}
                    onChange={() => onSelectContact(contact)}
                  />
                </td>
                <td>{contact.firstName} {contact.lastName}</td>
                <td>{contact.dob}</td>
                <td>{contact.address}</td>
                <td>{contact.city}</td>
                <td>{contact.state}</td>
                <td>{contact.zip}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ReactPaginate
        pageCount={Math.ceil(filteredContacts.length / itemsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
        previousLabel={<FaChevronLeft />}
        nextLabel={<FaChevronRight />}
      />
    </div>
  );
};

export default ContactSearch;
