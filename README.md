# Broad Store 🅱 - Stripe

This application is a MERN stack project (`MongoDB`, `Express`, `React`, `Node.js`) integrated with `Stripe` for handling payments. It's designed to enable users to complete transactions securely through Stripe's payment gateway.

## Developed by

- <a href='https://github.com/santhoshpandi'>`Santhosh Pandi`</a> &
 <a href='https://github.com/madheshgavinesh'> `Madhesh`</a>

## Screenshots


## Features
- **Home Page**: 
  - Displays various `Shopping Items`

- **Item Selection & Cart Management**: 
  - Users can **select  items** and specify their **quantity**.
  - Items can be added to a **shopping cart**.

- **Checkout Page**: 
  - When the user clicks the **checkout button**, they are redirected to the **Stripe payment page** to complete the transaction securely.

- **Stripe Payment Integration**: 
  - Handles secure payment processing using **Stripe**.
  - After a **successful payment**, the user is redirected back to the **home page**.

- **Order Confirmation & History**: 
  - After a successful payment, users receive **order confirmation** message.

---

# Workflow:

1. **Select Items**: Users browse the available items and add them to their cart, specifying quantities.
2. **Proceed to Checkout**: Once the user is ready to complete the purchase, they click the **checkout button**, which navigates them to the **Stripe payment page**.
3. **Payment Processing**: The payment is processed securely through Stripe.
4. **Payment Success**: After a successful payment, users are redirected back to the **home page**.

---

These features provide a seamless and secure user experience, allowing users to browse, purchase, and manage their orders, all with Stripe's secure payment integration.


## Tech Stack

- **Frontend**:
  - React
  - Tailwind CSS
  - Vite (for faster development builds)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - JSON Web Tokens (JWT) for authentication

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js**: Version 14 or higher
- **Node.js** (version 14 or above)
- **MongoDB** (local or Atlas for cloud-based DB)
- **Git**: Version 6 or higher

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/santhoshpandi/broad-store-stripe.git
   ```

2. Navigate to the project directory:
   ```
   cd broad-store-stipe
   ```

3. Install the dependencies:
   ```
   npm install
   npm run installs
   ```

  ### Environment Variables Setup

  You’ll need to set up the following environment variables for both the backend and the frontend:

  #### Backend (Create `.env` file inside `backend` folder )

```
STRIPE_SECRET_KEY= <your_Stripe_Secret_key>
BASE_URL= http://localhost:8000
DB_URL= <your_mongodb_connection_String>
PORT= 8000
```

  #### Frontend (Create `.env` file inside `frontend` folder )

  ```
  VITE_APP_API_URI = http://localhost:8000
  ```

4. Start the App ( From `broad-store-stripe` ):

   ```
   npm run dev
   ```

The App will be available at http://localhost:5173

Happy Coding😊👩‍💻


## Acknowledgments


- **React**: A JavaScript library for building user interfaces.
- **Context API**: A Built-in method in react used for State Management.
- **MongoDB**: A NoSQL database used for storing data in a flexible, JSON-like format. It provides high scalability and performance, making it ideal for modern web applications.

- **Node.js**: A JavaScript runtime built on Chrome's V8 engine. It allows the execution of JavaScript code on the server side, enabling full-stack JavaScript development.

- **Express.js**: A minimalist web framework for Node.js that simplifies the creation of server-side applications by providing a robust set of features for building APIs and handling requests.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: An extremely fast build tool for modern web projects.


  

