# SmartCart_Daily_Essentials
SmartCart – Daily Essentials Store
A modern full-stack MERN application where users can browse products, filter by category, add items to cart, and authenticate using phone-based OTP login.
# Features
Are Authentication,
Phone number login,
OTP verification using backend validation,
JWT-based protected routes,
Store,
Product listing fetched from MongoDB,
Category filters,
Price sorting (Low → High / High → Low),
Search functionality,
Product cards with “Add to Cart” buttons,
Cart,
Add, remove, and update item quantities,
Cart item count badge,
Popup confirmation when an item is added,
User Interface,
Fully responsive layout,
Sidebar navigation,
Light and dark theme support,
Moving discount ribbon,
Clean dashboard with user details and category shortcuts,
Tech Stack,
Frontend,
React.js,
Axios,
Context API,
CSS3,
Backend,
Node.js,
Express.js,
MongoDB + Mongoose, and
JWT Authentication

# Installation & Setup
1. Clone the Repository
git clone https://github.com/sanju-2605/SmartCart_Daily_Essentials.git
cd SmartCart_Daily_Essentials

2. Install Dependencies
   
Frontend

cd client

npm install


Backend
cd ../server
npm install

3. Environment Variables
Create a .env file inside the /server folder:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

4. Run the Project
Backend
cd server
npm run dev

Frontend
cd client
npm start
