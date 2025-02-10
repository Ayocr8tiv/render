import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from '../router'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/Store.jsx'

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
   <App />
 </Provider>
)
