import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function GenderDropdown({ data, setData }) {
  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: "100%" }}>
        <Select
          value={data}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}>
          <MenuItem value=''>
            <em className='text-[#9CA3B1]'>Region</em>
          </MenuItem>
          <MenuItem value={10}>Abu Dhabi</MenuItem>
          <MenuItem value={20}>Ajman</MenuItem>
          <MenuItem value={30}>Dubai</MenuItem>
          <MenuItem value={40}>Fujairah</MenuItem>
          <MenuItem value={50}>Ras Al Khaimah</MenuItem>
          <MenuItem value={60}>Sharjah</MenuItem>
          <MenuItem value={70}>Umm Al Quwain</MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
}
