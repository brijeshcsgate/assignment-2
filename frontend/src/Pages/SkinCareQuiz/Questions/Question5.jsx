import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

export default function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby='demo-controlled-radio-buttons-group'
        name='controlled-radio-buttons-group'
        value={value}
        onChange={handleChange}>
        <FormControlLabel
          value='Everyday'
          control={<Radio />}
          label='Everyday'
        />
        <FormControlLabel
          value='Most Days'
          control={<Radio />}
          label='Most Days'
        />
        <FormControlLabel
          value='Somedays Or Never'
          control={<Radio />}
          label='Somedays Or Never'
        />
        
      </RadioGroup>
    </FormControl>
  );
}