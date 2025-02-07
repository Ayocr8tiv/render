import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Products from "./src/pages/Products";
import Home from "./src/pages/Home";
import ProductDetail from "./src/pages/ProductDetail";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: '/product', element: <Products /> },
            { path: '/product/:id', element: <ProductDetail /> }
        ]
    }
])

export default router