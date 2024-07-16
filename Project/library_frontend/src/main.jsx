import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import RootLayout from "./routes/RootLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./auth/ProtectedRoute";

import Home from "./routes/Home";
import Users from "./routes/Users";
import Books from "./routes/Books";

import LogInModal from "./components/LogInModal";
import UserModal from "./components/UserModal";
import UserEditModal, {
  loader as userLoader,
} from "./components/UserEditModal";
import BookModal, { loader as bookLoader } from "./components/BookModal";

import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <RootLayout />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "login",
            element: <LogInModal />,
          },
        ],
      },
      {
        path: "users",
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "newUser",
            element: <UserModal />,
          },
          {
            path: "editUser/:id",
            element: <UserEditModal />,
            loader: userLoader,
          },
        ],
      },
      {
        path: "books",
        element: (
          <ProtectedRoute>
            <Books />,
          </ProtectedRoute>
        ),
        children: [
          {
            path: "newBook",
            element: <BookModal isEditing={false} />,
          },
          {
            path: "editBook/:id",
            element: <BookModal isEditing={true} />,
            loader: bookLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
