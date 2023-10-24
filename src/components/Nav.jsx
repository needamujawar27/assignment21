import React from "react";
import {Grid} from "@mui/material"
import { NavItem } from "./NavItem";

export const Nav=()=>{
    return(
        <Grid container spacing={2}>
            <Grid item xs={4}><NavItem path="/" label="India"/></Grid>
            <Grid item xs={4}><NavItem path="/us" label="US"/></Grid>
            <Grid item xs={4}><NavItem path="/uk" label="Uk"/></Grid>

        </Grid>
    )
}