import { createBrowserRouter, RouterProvider } from 'react-router'
import StoreProductPage from './Page/StoreProductPage'
import Layout from './Page/Layout'
import Order from './Page/Order'
import RegistrationPage from './Page/RegistrationPage'
import LoginPage from './Page/LoginPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'store',
        element: <StoreProductPage />,
      },    
      
      {
        path: 'order',
        element: <Order />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'registration',
        element: <RegistrationPage />,
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
