import { Suspense } from "react";
import "./App.css";
import Products from "./get products/products/products";

const fetchProduct = async () => {
  const res = await fetch("https://fakestoreapi.in/api/products/category?type=mobile");
  return res.json();
};
function App() {
  const fetchProductPromise = fetchProduct();
  return (
    <>
      <Suspense fallback={<h2 style={{textAlign:"center"}}>Product's Are Loading...</h2>}>
        <Products fetchProductPromise={fetchProductPromise}></Products>
      </Suspense>
    </>
  );
}

export default App;
