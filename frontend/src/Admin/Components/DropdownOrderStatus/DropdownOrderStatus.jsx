import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useContext } from "react";
import ApiContext from "../../../Context/api";

export default function BasicSelect({ orderId, data, setData }) {
  // const { editOrderById } = useContext(ApiContext);
  //   const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setData(event.target.value);
    // console.log(orderId, event.target.value);
    // editOrderById(orderId, event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Order Status</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={data}
          label='Enable Stripe'
          onChange={handleChange}>
          <MenuItem value={"None"}>
            <em className='text-gray-600'>None</em>
          </MenuItem>
          <MenuItem value={"Order Confirmed"}>Order Confirmed</MenuItem>
          <MenuItem value={"Order Shipped"}>Order Shipped</MenuItem>
          <MenuItem value={"Order Delivered"}>Order Delivered</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
