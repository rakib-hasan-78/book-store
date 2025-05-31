import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root/Root'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Books from './pages/Books/Books';
import Home from './pages/Home/Home'
import BookDetail from './components/BookDetail/BookDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/',
        element: <Home />
      }
      ,{
        path: '/listed-books',
        element: <Books />
      },
      {
        path:'/books/:bookId',
        loader: () => fetch('/data/booksData.json'),
        element: <BookDetail />
      }
    ]
    
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />    
  </StrictMode>,
)

