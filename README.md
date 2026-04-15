#  Smart Expense Tracker

A full-stack expense management application with authentication, analytics, and a responsive UI. Built with the MERN stack.

##  Features

### Authentication
- User registration and login
- JWT token-based authentication
- Password encryption with bcrypt

### Expense Management
- Add expenses with title, amount, category, date, and notes
-  Edit and delete existing expenses
-  Paginated expense list (10 per page)
-  Filter by date range and category
-  Sort by date or amount (ascending/descending)
-  7 categories: Food, Transport, Shopping, Health, Entertainment, Utilities, Other

### Analytics Dashboard
-  Summary cards: total spent this month, this year, highest spending category
-  Interactive charts (pie & bar)
-  Real-time updates when expenses are added or deleted
-  Date range picker for dashboard data

##  Tech Stack

**Frontend:**
- React.js with Vite
- React Router for navigation
- Axios for API calls
- Recharts for data visualization
- Tailwind CSS for styling
- Lucide React for icons

**Backend:**
- Node.js with Express.js
- JWT for authentication
- bcrypt for password hashing
- Joi for validation
- MongoDB Atlas with Mongoose ODM

**Deployment:**
- Frontend: Vercel
- Backend: Render or Railway

##  Project Structure

```
smart-expense-tracker/
├── backend/
│   ├── src/
│   │   ├── constants/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── validators/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

##  Installation & Setup

### Prerequisites
- Node.js v14 or higher
- MongoDB Atlas account or local MongoDB instance
- Git

### Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file using `.env.example` as a template.
4. Start the backend server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend folder:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file if needed (see `.env.example`).
4. Start the frontend server:
```bash
npm run dev
```

##  Environment Variables

### Backend (`backend/.env`)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

### Frontend (`frontend/.env`)
```env
VITE_API_URL=http://localhost:5000/api
```

##  API Endpoints

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/expenses` | Get all expenses (filters supported) |
| POST | `/api/expenses` | Create new expense |
| PUT | `/api/expenses/:id` | Update expense |
| DELETE | `/api/expenses/:id` | Delete expense |
| GET | `/api/expenses/summary` | Get dashboard analytics |

##  Deployment

### Deploy Backend to Render
1. Push code to GitHub.
2. Create a Render web service.
3. Set root directory to `backend`.
4. Build command: `npm install`
5. Start command: `npm start`
6. Add environment variables from `backend/.env`.

### Deploy Frontend to Vercel
1. Connect the repo in Vercel.
2. Set root directory to `frontend`.
3. Add environment variable:
```text
VITE_API_URL=https://your-backend-url.onrender.com/api
```
4. Deploy.

##  Features Implemented
- User authentication with JWT
- CRUD operations for expenses
- Pagination (10 items per page)
- Filtering by date range and category
- Sorting by date and amount
- Analytics dashboard with summary cards and charts
- Responsive UI powered by Tailwind CSS
- Input validation with Joi
- Secure password hashing with bcrypt

##  Future Improvements
- Export expenses to CSV/PDF
- Budget planning feature
- Email notifications
- Mobile app version
- Multi-currency support
- Receipt image upload


## 📄 License
MIT License
