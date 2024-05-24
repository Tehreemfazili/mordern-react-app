import React, { FC } from "react";
import {  Retailers } from '../../Retailer-form/Retailer.tsx';
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import './BasicCard.scss'

export  const BasicCard: FC<Retailers> = ({data}) => {

  return (
    <div className="card-wrapper">
     {data.map((retailer) =>  (
    
        <Card className="card-wrapper-item">
          
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Retailers List
            </Typography>
            <Typography variant="h5" component="div">
              Name : {retailer.Name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Email : {retailer.Email}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
          </CardActions>
          
        </Card>
        
      ))}
    </div>
   
  );
}