# Course Scheduling Platform

A comprehensive web application for student course selection and scheduling built with React. This platform allows students to browse courses, register for classes, build their schedules, and manage registrations. Administrators can manage course listings, handle registrations, and resolve scheduling conflicts.

## Features

### Student Features
- **Browse Courses**: Search and filter available courses by name, code, or instructor
- **Course Registration**: Register for courses with automatic conflict detection
- **Schedule Builder**: Visual weekly schedule view showing all registered courses
- **Registration Management**: View and manage all course registrations
- **Conflict Prevention**: System automatically detects and prevents schedule conflicts

### Admin Features
- **Course Management**: Create, edit, and delete courses with detailed scheduling information
- **Registration Management**: View all student registrations and manage enrollments
- **Conflict Resolution**: Detect and resolve scheduling conflicts across all students
- **Enrollment Tracking**: Monitor course capacity and enrollment numbers

## Technology Stack

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Vite**: Fast build tool and dev server
- **Context API**: State management
- **LocalStorage**: Data persistence

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Available Routes

- `/login` - Course scheduling platform login
- `/auth` - **Login/Signup System** (standalone authentication system)
- `/admin/*` - Admin dashboard
- `/student/*` - Student dashboard

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

### Login

- Use any username and password to login
- Select your role: **Student** or **Admin**
- The system will remember your session

### As a Student

1. **Browse Courses**: Navigate to "Browse Courses" to see all available courses
2. **Register**: Click "Register" on any available course
3. **View Schedule**: Check "My Schedule" to see your weekly timetable
4. **Manage Registrations**: Go to "My Registrations" to view or drop courses

### As an Admin

1. **Manage Courses**: Add, edit, or delete courses from the "Courses" section
2. **View Registrations**: See all student registrations in the "Registrations" section
3. **Resolve Conflicts**: Check and resolve scheduling conflicts in the "Conflicts" section

## Project Structure

```
src/
├── components/
│   ├── admin/
│   │   ├── AdminDashboard.jsx
│   │   ├── CourseManagement.jsx
│   │   ├── RegistrationManagement.jsx
│   │   └── ConflictResolution.jsx
│   ├── student/
│   │   ├── StudentDashboard.jsx
│   │   ├── CourseSelection.jsx
│   │   ├── MySchedule.jsx
│   │   └── MyRegistrations.jsx
│   └── Login.jsx
├── context/
│   └── AppContext.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Key Features Implementation

### Schedule Conflict Detection

The system automatically detects conflicts by:
- Comparing course schedules day by day
- Checking for overlapping time slots
- Preventing registration if a conflict exists
- Providing conflict resolution tools for admins

### Data Persistence

All data (courses, registrations, user sessions) is stored in browser localStorage, so your data persists across page refreshes.

## Future Enhancements

- Backend API integration
- Database storage
- User authentication system
- Email notifications
- Course prerequisites checking
- Waitlist functionality
- Advanced filtering and sorting

## License

This project is open source and available for educational purposes.

