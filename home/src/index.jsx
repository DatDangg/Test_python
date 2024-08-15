// Home page
          // import React from "react";
          // import { createRoot } from "react-dom/client";
          // import '../src/style.css'
          // import { Header } from "./components/Header/Header";
          // import { Footer } from "./components/Footer/Footer";
          // import { Banner } from "./components/Banner/Banner";
          // import { Categories } from "./components/Categories/Categories";
          // import { Product } from "./components/Product/Product";
          // import { ProductType } from "./components/ProductType/ProductType";
          // import { Discount } from "./components/Discount/Discount";
          // const app = document.getElementById("app");

          // createRoot(app).render(
          //   <>
          //   <div className="home">
          //     <Header />
          //     <Banner />
          //     <Categories />
          //     <Product />
          //     <ProductType />
          //     <Discount />
          //     <Footer />
          //   </div>
          //   </>
          // );

// product list
          // import React from "react";
          // import { createRoot } from "react-dom/client";
          // import '../src/style.css'
          // import { BreadCrumbs } from "./components/BreadCrumbs/BreadCrumbs";
          // import { Filter } from "./components/Filter/Filter";
          // import { ProductList } from "./components/ProductList/ProductList";
          // import { Header } from "./components/Header/Header";
          // import { Footer } from "./components/Footer/Footer";

          // const app = document.getElementById("app");

          // createRoot(app).render(
          //   <>
          //   <div className="products-page">
          //     <Header />
          //     <BreadCrumbs />
          //     <div className="content">
          //       <div className="frame"> 
          //         <Filter />
          //         <ProductList />
          //       </div>
          //     </div>
          //     <Footer />
          //   </div>
          //   </>
          // );




// product detail
          // import React from "react";
          // import { createRoot } from "react-dom/client";
          // import '../src/style.css'
          // import { ProductInfo } from "./components/ProductInfo/ProductInfo";
          // import { ProductDetail } from "./components/ProductDetail/ProductDetail";
          // import { Review } from "./components/Review/Review";
          // import { Header } from "./components/Header/Header";
          // import { Footer } from "./components/Footer/Footer";
          // import { BreadCrumbs } from "./components/BreadCrumbs/BreadCrumbs";

          // const app = document.getElementById("app");

          // createRoot(app).render(
          //   <>
          //   <div className="product-details-page">
          //     <Header />
          //     <BreadCrumbs />
          //     <ProductInfo />
          //     <ProductDetail />
          //     <Review />
          //     {/* Có thể xem xét đến việc dùng related product */}
          //     <Footer />
          //   </div>
          //   </>
          // );


// cart
import React from "react";
import { createRoot } from "react-dom/client";
import '../src/style.css'
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Cart } from "./components/Cart/Cart";
import { Summary } from "./components/Summary/Summary";

const app = document.getElementById("app");

createRoot(app).render(
  <>
  
  <div className="shopping-cart">
  <Header />
    <div className="content-wrapper">
      <div className="content-2">
        <Cart />
        <Summary />
      </div>
    </div>
    <Footer />
  </div>
  </>
);
