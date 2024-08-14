import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header/Header";
// import { Home } from "./screens/Home/Home";
import '../src/style.css'
import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { Categories } from "./components/Categories/Categories";
import { Product } from "./components/Product/Product";
import { ProductType } from "./components/ProductType/ProductType";
import { Discount } from "./components/Discount/Discount";

const app = document.getElementById("app");

createRoot(app).render(
  <>
  <div className="home">
    <Header />
    <Banner />
    <Categories />
    <Product />
    <ProductType />
    <Discount />
    <Footer />
    </div>
  </>
);
