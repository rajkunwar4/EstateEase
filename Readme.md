# Estate Ease
Estate Ease is a modern real estate application developed using the MERN stack (MongoDB, Express.js, React, Node.js). The application provides a seamless and user-friendly experience for both buyers and sellers to interact, search for properties, and manage real estate transactions.




## Table of Contents
Features
Tech Stack
Installation
Usage
API Endpoints
Contributing
License

## Features
User Authentication: Secure login and registration for users.
Property Listings: Users can view and search for properties based on various filters.
Property Management: Property owners can list, update, and delete their properties.
Favorites: Users can save properties to their favorites for easy access later.
Responsive Design: Optimized for both desktop and mobile devices.
Interactive Maps: Integration with map services to view property locations.

## Tech Stack
Frontend: React.js, Zustand
Backend: Node.js, Express.js
Database: MongoDB, PrismaORM
Authentication: JWT (JSON Web Tokens), Bcrypt
Styling: SASS
Maps Integration: React Leaflet


## Installation
To run this application locally, follow these steps:

#### Clone the repository:
bash
Copy code
git clone https://github.com/rajkunwar4/EstateEase.git
cd estate-ease
Install server dependencies:

bash
Copy code
cd server
npm install
Install client dependencies:

bash
Copy code
cd ../client
npm install
Set up environment variables:
Create a .env file in the server directory with the following content:

plaintext
Copy code
PORT=5000
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret
Run the server:

bash
Copy code
cd ../server
npm start
Run the client:
Open a new terminal window and navigate to the client directory:

bash
Copy code
cd client
npm start
The application should now be running on http://localhost:4173.

## Usage
Register: Create a new account to start using the application.
Login: Use your credentials to log in.
Browse Properties: Explore available properties using the search and filter options.
Manage Properties: If you are a property owner, you can list new properties or manage your existing listings.
Favorites: Save properties to your favorites list for easy access later.
##API Endpoints

#### User Authentication

POST /api/users/register: Register a new user.
POST /api/users/login: Login a user.

##### Property Management

GET /api/properties: Get all properties.
POST /api/properties: Create a new property (requires authentication).
GET /api/properties/:id: Get a specific property by ID.
PUT /api/properties/:id: Update a property (requires authentication).
DELETE /api/properties/:id: Delete a property (requires authentication).

##### Favorites

GET /api/favorites: Get all favorite properties of a user (requires authentication).
POST /api/favorites: Add a property to favorites (requires authentication).
DELETE /api/favorites/:id: Remove a property from favorites (requires authentication).
Contributing
We welcome contributions from the community! To contribute, please follow these steps:

#### Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
Please ensure your code follows the project's coding standards and includes relevant tests.

#### License
This project is licensed under the MIT License. See the LICENSE file for details.

Thank you for using Estate Ease! If you have any questions or feedback, feel free to open an issue or contact us.