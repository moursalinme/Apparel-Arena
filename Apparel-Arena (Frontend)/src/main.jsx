import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './route/Route'
import '@smastrom/react-rating/style.css'
import AuthContextProvider from './Context/AuthContextProvider'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CartContextProvider from './Context/CartContextProvider'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <AuthContextProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <RouterProvider router={Route} />
        </AuthContextProvider>
      </CartContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
