import React from "react";
import {Button} from "@mui/material"
import { Link } from "react-router-dom";
export const NavItem=({label,path})=>{
    return(
        <Link to={path}>
            <Button variant="contained" color="info" fullWidth>{label}</Button>
        </Link>
    )
}