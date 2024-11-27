# React Contact Search Application

A responsive React application that allows users to search, view, and paginate through a list of contact details. This application uses Bootstrap for responsive UI, `ReactPaginate` for pagination, and JSON data for contact and state information.

## **Features**

- Search contacts by first name, last name, email, etc.
- Paginated results to display a large set of contacts efficiently.
- Responsive design using Bootstrap that adapts to different screen sizes (mobile, tablet, desktop).
- Uses React for dynamic UI updates and state management.

## **Prerequisites**

Before setting up the project, ensure you have the following tools installed on your machine:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

If you don’t have Node.js and npm installed, you can download them from [Node.js official website](https://nodejs.org/).

---

## **Getting Started**

Follow these steps to get the application up and running locally.

### **Step 1: Clone the Repository**

Clone the project repository to your local machine using Git:

```bash
git clone https://github.com/parita-akoliya/contact-search-react
```

Navigate to the project directory:

```bash
cd contact-search-react
```

### **Step 2: Install Dependencies**

Install the required dependencies by running:

```bash
npm install
```

This command will install all necessary libraries, including React, ReactPaginate, Bootstrap, and others.

### **Step 3: Configure Data Files**

Ensure that your contact data and state data are available as JSON files in the `src/data` directory.

1. **Contacts Data (contacts.json)**: This file contains an array of contact objects. Below is an example:

```json
[
  {
    "id": 1,
    "firstName": "Rajeev",
    "lastName": "Sharma",
    "dob": "1986-02-12",
    "email": "rajeevsharma@gmail.com",
    "phone": "2582528582",
    "address": "1001 Noble St Ste 1",
    "city": "Fairbanks",
    "state": "AK",
    "zip": "99701"
  },
  {
    "id": 2,
    "firstName": "Eesha",
    "lastName": "Sharma",
    "dob": "1995-07-04",
    "email": "eeshasharma@gmail.com",
    "phone": "5875541234",
    "address": "4821 Ridge Top Cir",
    "city": "Anchorage",
    "state": "AK",
    "zip": "99508"
  }
]
```

2. **States Data (states.json)**: This file contains state abbreviations and names for use in forms. Example:

```json
[
  { "id": "AL", "name": "Alabama" },
  { "id": "AK", "name": "Alaska" },
  { "id": "AZ", "name": "Arizona" },
  ...
]
```

### **Step 4: Run the Application Locally**

To run the application locally, use the following command:

```bash
npm start
```

This will start the development server, and you can view the application in your browser at `http://localhost:3000`.

---

## **Features Breakdown**

### **Responsive Design**

- This project uses **Bootstrap**'s grid system to ensure responsiveness. The layout adjusts automatically to different screen sizes, from mobile devices to desktop monitors.
  
### **Pagination**

- **ReactPaginate** is used to display a paginated list of contacts. It allows users to navigate through the contact list with next/previous page buttons and direct page number selection.

### **Search Functionality**

- The search feature filters contacts based on various fields like first name, last name, and email. The search result updates dynamically as users type in the search box.

---

## **Deploying to GitHub Pages**

Follow the steps below to deploy the application to GitHub Pages:

### **Deploy to GitHub Pages**


```bash
npm run predeploy
npm run deploy
```

### **Access Your Application**

Visit the following URL to see the live application:

```
https://parita-akoliya.github.io/contact-search-react
```

## **Testing the Application**

### **Unit Testing**

Ensure that your application is functioning as expected by writing unit tests for your components. You can use **Jest** for unit testing in React:

```bash
npm test
```