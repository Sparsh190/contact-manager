# contact-manager
Contact Manager Project

Description:

The Contact Manager is a full-stack application that allows users to manage their contact information. The app has two major parts: a frontend (built using React) and a backend (built using Node.js, Express, and MongoDB). The backend provides a REST API for CRUD operations on contacts, and the frontend allows users to interact with the contacts through a user interface.

Features:

	•	Add, update, view, and delete contacts.
	•	Manage contacts’ details such as name, phone number, email, company, and job title.
	•	Data is stored in a MongoDB database.

Setup Instructions:

1. Clone the repository:

First, clone the project from GitHub to your local machine:
git clone https://github.com/Sparsh190/contact-manager.git
cd contact-manager

2. Install dependencies:

For Backend:

	1.	Navigate to the backend directory:
 cd backend
 Install the necessary dependencies:
 npm install

 For Frontend:

	1.	Navigate to the frontend directory:
  cd ../frontend
	2.	Install the necessary dependencies:
   npm install


 MongoDB Setup:

Ensure you have MongoDB installed and running on your local machine. If you’re using a local instance, make sure MongoDB is running on the default port (27017).
To start MongoDB:

	•	On Mac/Linux:
    mongod
  •	On Windows, start MongoDB using the MongoDB Compass or Command Line.

If you’re using a cloud-based MongoDB solution (like MongoDB Atlas), replace the connection string in the backend with your cloud MongoDB URI.
  
Set up environment variables (optional):

Create a .env file in the backend folder if needed to store sensitive data, such as your MongoDB connection URI, port number, etc. Here’s an example:
MONGO_URI=mongodb://localhost:27017/contact_manager
PORT=5001

Start the Backend:

To start the backend server, navigate to the backend folder and run:
npm start
The backend will be running at http://localhost:5001.

Start the Frontend:

To start the frontend React application, navigate to the frontend folder and run:
npm start
The frontend will be running at http://localhost:3000.

Accessing the App:

Open your browser and go to http://localhost:3000 to interact with the Contact Manager frontend. The frontend will make requests to the backend API, which is running at http://localhost:5001.

Database Schema:

Here’s the database schema used for the Contact Manager application. The schema is built with Mongoose and defines the structure for contact data.

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  company: { type: String },
  jobTitle: { type: String },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;

This schema defines the structure for each contact:
	•	firstName and lastName: Required fields for the contact’s name.
	•	email: A unique field for the contact’s email.
	•	phoneNumber: Required field for the contact’s phone number.
	•	company: The contact’s company (optional).
	•	jobTitle: The contact’s job title (optional).

 Major Technical Decisions:

	1.	MongoDB for data storage:
MongoDB was chosen as the database for its flexibility and ease of scaling. The app doesn’t require complex relational data, so MongoDB is a good choice for storing contact details.
	2.	Mongoose for database interactions:
Mongoose provides an elegant way to model MongoDB data and interact with the database, which helps simplify querying and managing the database.
	3.	Express for the backend:
Express.js was used to build the backend REST API. It’s lightweight and well-suited for handling HTTP requests, making it a perfect choice for this small project.
	4.	React for the frontend:
React was chosen for the frontend due to its ease of creating dynamic and interactive user interfaces. React’s component-based structure helped in efficiently building the frontend for the Contact Manager.
	5.	CORS Handling:
CORS was configured on the backend to allow the frontend (running on a different port) to make requests to the API.

How the App Works:

Backend:

	•	The backend consists of an Express.js server that listens for API requests.
	•	The server connects to the MongoDB database and defines endpoints for CRUD operations on contacts:
	•	GET /api/contacts: Fetches all contacts from the database.
	•	POST /api/contacts: Adds a new contact to the database.
	•	DELETE /api/contacts/:id: Deletes a contact by its ID.

Frontend:

	•	The frontend is built with React. It consists of components for displaying the list of contacts and adding new contacts.
	•	The frontend makes API requests to the backend using axios to fetch, add, and delete contacts.
 
 Challenges and Solutions:

Challenge 1: MongoDB Connection Issues

	•	Problem: I faced issues connecting to MongoDB locally, especially when it was not started or running on the correct port.
	•	Solution: I ensured that MongoDB was installed and running locally by using the mongod command. For production environments, I switched to using MongoDB Atlas (cloud MongoDB service).

Challenge 2: Handling CORS Errors

	•	Problem: When making requests from the frontend to the backend, I encountered CORS (Cross-Origin Resource Sharing) errors.
	•	Solution: I used the cors middleware in Express to allow the frontend to make requests to the backend without security restrictions.

Challenge 3: Git and Version Control Issues

	•	Problem: I initially faced problems pushing my local files to GitHub because of conflicts and misconfigured remotes.
	•	Solution: I fixed the remote URLs and ensured that my local branch was aligned with the remote repository using git pull and resolving any merge conflicts.
