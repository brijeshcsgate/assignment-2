import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ data, setData }) {
  //   const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Enable Stripe</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data}
          label="Enable Stripe"
          onChange={handleChange}
        >
          <MenuItem value={10}>Enable</MenuItem>
          <MenuItem value={20}>Disable</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
