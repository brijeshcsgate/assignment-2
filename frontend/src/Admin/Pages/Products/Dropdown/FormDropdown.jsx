import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels({ menuItems, data, setData }) {
  const handleChange = (event) => {
    setData(event.target.value);
  };

  const renderedMenuItem = menuItems.map((data, index) => {
    return <MenuItem value={`${data}`}>{data}</MenuItem>;
  });

  return (
    <div className=''>
      <FormControl sx={{ m: 0, width: "100%" }}>
        <Select
          value={data}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}>
          <MenuItem value=''>
            <em className='text-[#9CA3C1]'>None</em>
          </MenuItem>
          {renderedMenuItem}
        </Select>
      </FormControl>
    </div>
  );
}
