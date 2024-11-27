import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactSearch from './ContactSearch';
import React from 'react';

jest.mock('../data/contacts.json', () => [
  { id: 1, firstName: 'John', lastName: 'Doe', dob: '1990-01-01', address: '123 Street', city: 'Cityville', state: 'CA', zip: '12345', email: 'john@example.com', phone: '123-456-7890' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', dob: '1992-02-02', address: '456 Avenue', city: 'Townsville', state: 'TX', zip: '67890', email: 'jane@example.com', phone: '987-654-3210' },
]);

jest.mock('../data/states.json', () => [
  { id: 'CA', name: 'California' },
  { id: 'TX', name: 'Texas' },
]);

describe('ContactSearch Component', () => {
  test('renders the contact search form and inputs', () => {
    render(<ContactSearch onSelectContact={jest.fn()} selectedContact={null} />);
    
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Street Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
  });

  test('filters contacts based on search criteria', async () => {
    render(<ContactSearch onSelectContact={jest.fn()} selectedContact={null} />);
    
    userEvent.type(screen.getByLabelText(/First Name/i), 'John');
    userEvent.type(screen.getByLabelText(/Last Name/i), 'Doe');
    userEvent.click(screen.getByText(/Search/i));
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
  });

  test('paginates correctly', async () => {
    render(<ContactSearch onSelectContact={jest.fn()} selectedContact={null} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    
    userEvent.click(screen.getByLabelText('Next Page'));
    
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  test('selects a contact', async () => {
    const mockSelectContact = jest.fn();
    
    render(<ContactSearch onSelectContact={mockSelectContact} selectedContact={null} />);
    
    const checkbox = screen.getAllByRole('checkbox')[0];
    
    userEvent.click(checkbox);
    
    expect(mockSelectContact).toHaveBeenCalledWith({
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      dob: '1990-01-01',
      address: '123 Street',
      city: 'Cityville',
      state: 'CA',
      zip: '12345',
      email: 'john@example.com',
      phone: '123-456-7890',
    });
  });

  test('renders no contacts when search returns no results', async () => {
    render(<ContactSearch onSelectContact={jest.fn()} selectedContact={null} />);
    
    userEvent.type(screen.getByLabelText(/First Name/i), 'NonExistent');
    userEvent.click(screen.getByText(/Search/i));
    
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
  });
});
