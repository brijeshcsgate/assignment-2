import * as React from 'react';
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels({ data, setData }) {
  //   const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: '100%' }}>
        <Select
          value={data}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em className="text-[#666A6E]">None</em>
          </MenuItem>
          <MenuItem value={'Name (A - Z)'}>Name (A - Z)</MenuItem>
          <MenuItem value={'Name (Z - A)'}>Name (Z - A)</MenuItem>
          <MenuItem value={'Price (Low To High)'}>Price (Low To High)</MenuItem>
          <MenuItem value={'Price (High To Low)'}>Price (High To Low)</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
}
