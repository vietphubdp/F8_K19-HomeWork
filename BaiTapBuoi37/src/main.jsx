import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/products",
		element: <Products />,
	},
	{
		path: "/products/:id",
		element: <ProductDetail />,
	},
]);

createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />,
);
