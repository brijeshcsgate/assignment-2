import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function LookingFor({ data, setData }) {
  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div className='w-full bg-white'>
      <FormControl sx={{ m: 0, width: "100%" }}>
        <Select
          value={data}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}>
          <MenuItem value='None'>
            <em className='text-[#9CA3AF]'>What are you looking for</em>
          </MenuItem>
          <MenuItem value='Skin Consultations'>Skin Consultations</MenuItem>
          <MenuItem value='Corporate Gifting Solution'>
            Corporate Gifting Solution
          </MenuItem>
          <MenuItem value='Wedding Gifting Solution'>
            Wedding Gifting Solution
          </MenuItem>
          <MenuItem value='Gifting Solution'>Gifting Solution</MenuItem>
          <MenuItem value='Customized Gifting'>Customized Gifting</MenuItem>
          <MenuItem value='Other'>Other</MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
}
