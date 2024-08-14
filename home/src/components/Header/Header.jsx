import React from "react";
import "./style.css";

export const Header = () => {
    return (
        <div className="header-top">
        <img className="img" alt="Logo" src="/img/logo.svg" />
        <div className="search-field">
        <img className="icon-search" alt="Icon search" src="/img/icon-32px-search.svg" />
        <div className="text-wrapper-2">Search</div>
        </div>
        <div className="navbar">
        <div className="text-wrapper-3">Home</div>
        <div className="text-wrapper-4">About</div>
        <div className="text-wrapper-4">Contact Us</div>
        <div className="text-wrapper-4">Blog</div>
        </div>
        <div className="icons">
        <img className="img-2" alt="Icon favorites" src="/img/icon-32px-favorites.svg" />
        <img className="img-2" alt="Icon cart" src="/img/icon-32px-cart.svg" />
        <img className="img-2" alt="Icon user" src="/img/icon-32px-user.svg" />
        </div>
        </div>
    );
};