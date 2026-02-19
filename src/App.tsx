import { createBrowserRouter, RouterProvider } from 'react-router'
import StoreProductPage from './Page/StoreProductPage'
import Layout from './Page/Layout'
import Order from './Page/Order'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/store',
        element: <StoreProductPage />,
      },
      {
        path: '/order',
        element: <Order />,
      }

    ]
  }
])


function App() {
  
  return (
   <RouterProvider router={router} />
  )
}

export default App
