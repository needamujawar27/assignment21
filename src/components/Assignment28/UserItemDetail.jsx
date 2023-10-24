import React from "react";
import {Grid} from "@mui/material"

export const UserItemDetail=({item})=>{
    return(
     <Grid item xs={12}>
      <h3>{item.id}.{item.name}</h3>
      <h5><b>UserName:</b>{item.username}</h5>
       <h5><b>Email id:</b> {item.email}</h5>
       <h5><b>Address:</b>{item.address.street}{item.address.suite}{item.address.city}</h5>
       <h5><b>ZipCode:</b>{item.address.zipcode}</h5>
       <h5><b>MobileNumber:</b>{item.phone}</h5>
       <h5><b>Company's Website:</b>{item.website}</h5>
       <h5><b>Company Name:</b>{item.company.name}</h5>
       <h5><b>Company's catch phrase:</b>{item.company.catchPhrase}</h5>
       <h5><b>Company's Business:</b>{item.company.bs}</h5>

     </Grid>
    )
}