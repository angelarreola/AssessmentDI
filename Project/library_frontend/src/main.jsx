import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import RootLayout from './routes/RootLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';
import withAuthLoader from './auth/withAuthLoader';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';

import Home from './routes/Home';
import Users, {loader as usersLoader} from './routes/Users';
import Books, {loader as booksLoader} from './routes/Books';

import LogInModal from './components/LogInModal';
import UserModal from './components/UserModal';
import UserEditModal,{ loader as userLoader} from './components/UserEditModal';
import BookModal, {loader as bookLoader} from './components/BookModal';

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
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
        loader: withAuthLoader(usersLoader),
        children: [
          {
            path: "newUser",
            element: <UserModal />
          },
          {
            path: "editUser/:id",
            element: <UserEditModal />,
            loader: withAuthLoader(userLoader),
          }
        ]
      },
      {
        path: 'books',
        element: (
          <ProtectedRoute>
            <Books />,
          </ProtectedRoute>
        ),
        loader: withAuthLoader(booksLoader),
        children: [
          {
            path: 'newBook',
            element: <BookModal isEditing={false}/>
          },
          {
            path: 'editBook/:id',
            element: <BookModal isEditing={true}/>,
            loader: withAuthLoader(bookLoader)
          }
        ]
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
