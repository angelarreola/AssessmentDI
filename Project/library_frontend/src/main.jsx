import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import RootLayout from './routes/RootLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AuthProvider } from './auth/AuthContext';

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
        element: <Users />,
        loader: usersLoader,
        children: [
          {
            path: "newUser",
            element: <UserModal />
          },
          {
            path: "editUser/:id",
            element: <UserEditModal />,
            loader: userLoader,
          }
        ]
      },
      {
        path: 'books',
        element: <Books />,
        loader: booksLoader,
        children: [
          {
            path: 'newBook',
            element: <BookModal isEditing={false}/>
          },
          {
            path: 'editBook/:id',
            element: <BookModal isEditing={true}/>,
            loader: bookLoader
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
