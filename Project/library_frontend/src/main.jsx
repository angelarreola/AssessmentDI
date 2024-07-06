import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import RootLayout from './routes/RootLayout';

import Home from './routes/Home';
import Users, {loader as usersLoader} from './routes/Users';
import Books from './routes/Books';

import LogInModal from './components/LogInModal';
import UserModal from './components/UserModal';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AuthProvider } from './auth/AuthContext'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "login",
            element: <LogInModal />
          }
        ]
      },
      {
        path: 'users',
        element: <Users />,
        loader: usersLoader,
        children: [
          {
            path: "newUser",
            element: <UserModal />
          }
        ]
      },
      {
        path: 'books',
        element: <Books />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
