import * as React from "react";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
// import Link from '../Link';
import { Link } from "react-router-dom";

export default function RadioButtonLabel({
  setSideBarCategorySelectionPath,
  pathLocation,
}) {
  return (
    <RadioGroup
      defaultValue='outlined'
      name='radio-buttons-group'
      onChange={(e) => setSideBarCategorySelectionPath(e.target.value)}>
      <Radio value='All Categories' label='All Categories' />
      <Radio value='Face Cleanser' label='Face Cleanser' />
      <Radio value='Moisturizer' label='Moisturizer' />
      <Radio value='Scrub' label='Scrub' />
      <Radio value='Body Butter' label='Body Butter' />
      <Radio value='Clay' label='Clay' />
      <Radio value='Lip Balm' label='Lip Balm' />
      <Radio value='Oil' label='Oil' />
      <Radio value='Skincare Kit' label='Skincare Kit' />
    </RadioGroup>
  );
}
