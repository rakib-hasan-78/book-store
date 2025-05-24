import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root/Root'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Books from './pages/Books/Books';
import Home from './pages/Home/Home'

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
      }
    ]
    
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />    
  </StrictMode>,
)

