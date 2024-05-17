import React from "react";
import { Typography } from "@mui/material";
import RetailerForm from "../../Components/Retailer-form/Retailer-form.tsx";

const RetailerPage = () => {
  return (
    <div className="retailer-page">
      <Typography variant="h2"> Honest Bobs of Woolwich</Typography>
      <Typography variant="h5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
      <RetailerForm/>
    </div>
  )
}

export default RetailerPage;