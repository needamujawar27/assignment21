import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Home } from "./Home";
import { ProductList } from "./ProductList";
import { CategoriesList } from "./CategoriesList";
import { About } from "./About";
import { Contact } from "./Contact";

export const Landing=()=>{
    return(
    <BrowserRouter>
            <Navigation/>
    <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/cnct" element={<Contact/>}/>
        <Route path="/cat" element={<CategoriesList/>}/>
        <Route  path="/product" element={<ProductList/>}/>
        
    </Routes>
    </BrowserRouter>


    )

}