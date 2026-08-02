# 🏨 Hotel Booking Platform

A full-stack hotel booking application built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js), featuring JWT-based authentication and dynamic room reservation management.

---

## 🚀 Features

- 🔐 **JWT-Based Authentication** — Secure user registration & login with encrypted passwords (bcrypt) and token-based session management
- 🏨 **Dynamic Room Reservation Management** — Browse, book, edit, and delete hotel/room listings in real time
- 📋 **RESTful APIs** — Clean API design for booking operations, user management, and hotel listing services
- ❤️ **Favourites System** — Save and manage favourite hotel listings
- 📅 **Booking Management** — View and manage all reservations from a personalized dashboard
- 🖼️ **Image Upload** — Upload property photos with Multer (file filtering & storage)
- ✅ **Input Validation** — Server-side validation using express-validator
- 👤 **Role-Based Access** — Separate Guest and Host user types with protected routes
- 📱 **Responsive Frontend** — Seamlessly integrated UI built with React.js, connected to a Node.js + Express backend

---

## 🛠️ Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| **Frontend** | React.js, HTML5, CSS3, JavaScript   |
| **Backend**  | Node.js, Express.js                 |
| **Database** | MongoDB, Mongoose ODM               |
| **Auth**     | JWT, bcrypt                          |
| **Upload**   | Multer                              |
| **Validation** | express-validator                 |

---

## 📁 Project Structure

```
Hotel-Booking/
├── controllers/
│   ├── authController.js      # Login, Signup, Logout logic
│   ├── hostController.js      # CRUD operations for hotel listings
│   ├── storeController.js     # Browse homes, bookings, favourites
│   └── errors.js              # 404 error handler
├── models/
│   ├── home.js                # Hotel/Home schema (name, price, location, rating, photo)
│   ├── user.js                # User schema (name, email, password, role, favourites)
│   └── favourite.js           # Favourite schema
├── routes/
│   ├── authRouter.js          # Auth routes (login, signup, logout)
│   ├── hostRouter.js          # Host routes (add, edit, delete homes)
│   └── storeRouter.js         # Store routes (browse, book, favourite)
├── utils/
│   └── pathUtil.js            # Path utility
├── public/                    # Static assets (CSS, JS, images)
├── views/                     # EJS templates
├── app.js                     # Express server entry point
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account or local MongoDB instance

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/Hotel-Booking.git
cd Hotel-Booking

# 2. Install dependencies
npm install

# 3. Configure environment variables
# Create a .env file and add your MongoDB connection string:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/hotel-booking

# 4. Start the development server
npm start
```

The server runs at **http://localhost:3003**

---

## 🔗 API Endpoints

### Authentication
| Method | Endpoint     | Description          |
|--------|-------------|----------------------|
| GET    | `/login`    | Render login page    |
| POST   | `/login`    | Authenticate user    |
| GET    | `/signup`   | Render signup page   |
| POST   | `/signup`   | Register new user    |
| POST   | `/logout`   | End user session     |

### Hotel Listings (Host — Protected)
| Method | Endpoint                    | Description              |
|--------|----------------------------|--------------------------|
| GET    | `/host/add-home`           | Render add listing form  |
| POST   | `/host/add-home`           | Create new listing       |
| GET    | `/host/host-home-list`     | View all host listings   |
| GET    | `/host/edit-home/:homeId`  | Render edit listing form |
| POST   | `/host/edit-home`          | Update listing           |
| POST   | `/host/delete-home/:homeId`| Delete listing           |

### Store (Public / User)
| Method | Endpoint                         | Description                |
|--------|----------------------------------|----------------------------|
| GET    | `/`                              | Homepage with all listings |
| GET    | `/homes`                         | Browse all hotels          |
| GET    | `/homes/:homeId`                 | View hotel details         |
| GET    | `/bookings`                      | View user bookings         |
| GET    | `/favourites`                    | View favourite hotels      |
| POST   | `/favourites`                    | Add to favourites          |
| POST   | `/favourites/delete/:homeId`     | Remove from favourites     |

---

## 📸 Screenshots

> _Add screenshots of your application here_

---

## 🙋‍♀️ Author

**Mahitha JV**

---

## 📝 License

This project is licensed under the ISC License.
