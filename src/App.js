import React from "react";
import {Card,CardActionArea,CardContent} from "@mui/material"
import "./components/common.css"
import {Assignment20} from "./components/Assignment20";
import {India} from "./components/India";
import {Uk} from "./components/Uk";
import {US} from "./components/US"
import {Nav} from "./components/Nav";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import {
  CategoriesList
} from "./components/Assignment22 &26/CategoriesList";
import {
  ProductList
} from "./components/Assignment22 &26/ProductList";
import {
  UserList
} from "./components/Assignment23/UserList";
import {
  EmployeeList
} from "./components/Assignment24/EmployeeList";
import {
  MovieList
} from "./components/Assignment25/MovieList";
import {
  Userid
} from "./components/Assignment27/Userid";
import {
  Landing
} from "./components/Assignment22 &26/Landing";
import { UserListDetail } from "./components/Assignment28/UserListDetail";
import { Train } from "./components/Assignment29/Train";
import { Homecard } from "./components/Assignment30/Homecard";
function App() {
  return (
    // <BrowserRouter>
    // <CategoriesList/>
    // {/* <Nav/> */}
    // <Routes>
    //   {/* <Route path="/" element={<India/>}/>
    //   <Route path="/us" element={<US/>}/>
    //   <Route path="/uk" element={<Uk/>}/> */}
    //   {/* <Route path="/" element={<ProductList/>}/> */}

    // </Routes>
    // </BrowserRouter>

    // <UserList/>
    // <EmployeeList/>
    // <MovieList/>
    // <Userid/>
    // //assignment27
    // <Card>
    //   <CardContent>
    //   <Landing/>
    //   </CardContent>
    // </Card>
    // //Assignment28//
    // <Card sx={{bgcolor:"whitesmoke",padding:"60px"}}>
    //   <CardContent>
    //     <UserListDetail/>
    //   </CardContent>
    // </Card>
   // Assignment29//
    // <Card>
    //   <CardContent>
    //     <Train/>
    //   </CardContent>
    // </Card>
     //Assignment30//
     <Homecard/>
  );
}

export default App;