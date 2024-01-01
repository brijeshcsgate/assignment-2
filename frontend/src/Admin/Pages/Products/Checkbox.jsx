import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

// const label = { inputProps: { "aria-label": "Checkbox" } };

export default function Checkboxes({ text, setValue }) {
  return (
    <div className='flex flex-row items-center'>
      {/* <Checkbox {...label} defaultChecked /> */}
      <Checkbox onClick={(e) => setValue(e.target.checked)} />
      <p>{text}</p>
      {/* <Checkbox {...label} disabled /> */}
      {/* <Checkbox {...label} disabled checked /> */}
    </div>
  );
}
