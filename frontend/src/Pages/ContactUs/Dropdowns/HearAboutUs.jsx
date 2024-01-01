import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function HearAboutUs({ data, setData }) {
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
            <em className='text-[#9CA3AF]'>Where did you hear about us</em>
          </MenuItem>
          <MenuItem value='Instagram'>Instagram</MenuItem>
          <MenuItem value='LinkedIn'>LinkedIn</MenuItem>
          <MenuItem value='Facebook'>Facebook</MenuItem>
          <MenuItem value='TikTok'>TikTok</MenuItem>
          <MenuItem value='Google'>Google</MenuItem>
          <MenuItem value='Word Of Mouth'>Word Of Mouth</MenuItem>
          <MenuItem value='Others'>Others</MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
}
