import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import ErrorPage from './ErrorPage';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import ReadBooks from './components/ReadBooks/ReadBooks';
import WishlistBooks from './components/WishlistBooks/WishlistBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/listed-books',
        // loader: ()=>fetch('../public/books.json'),
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>, 
          },
          {
            path: 'wishlist-books',
            element: <WishlistBooks></WishlistBooks>
          }
        ]
      },
      
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
