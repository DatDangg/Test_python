// Home page
          import React from "react";
          import { createRoot } from "react-dom/client";
          import '../src/style.css'
          import { Header } from "./components/Header/Header";
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

// product list
          // import React from "react";
          // import { createRoot } from "react-dom/client";
          // import '../src/style.css'
          // import { BreadCrumbs } from "./components/BreadCrumbs/BreadCrumbs";
          // import { Filter } from "./components/Filter/Filter";
          // import { ProductList } from "./components/ProductList/ProductList";

          // const app = document.getElementById("app");

          // createRoot(app).render(
          //   <>
          //   <div className="products-page">
          //     <BreadCrumbs />
          //     <div className="content">
          //       <div className="frame"> 
          //         <Filter />
          //         <ProductList />
          //       </div>
          //     </div>
          //   </div>
          //   </>
          // );

