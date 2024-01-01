import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "../SkinCareQuiz.css";

export default function CheckboxLabels() {
  return (
    <FormGroup className='skinCareQuiz-main-modal-content-quiz-QA-2'>
      <FormControlLabel
        control={<Checkbox />}
        label='Fine Lines And Wrinkles'
      />
      <FormControlLabel
        control={<Checkbox />}
        label='Uneven Skin Tone And Roughness'
      />
      <FormControlLabel
        control={<Checkbox />}
        label='Anti-Aging & Prevention'
      />
      <FormControlLabel control={<Checkbox />} label='Dark Circles' />
      <FormControlLabel
        control={<Checkbox />}
        label='Breakouts And Blemishes'
      />
      <FormControlLabel control={<Checkbox />} label='Dark Spots' />
      <FormControlLabel
        control={<Checkbox />}
        label='Rosacea, Redness Or Eczema'
      />
      <FormControlLabel control={<Checkbox />} label='Dullness' />
      {/* <FormControlLabel control={<Checkbox defaultChecked />} label='Label' /> */}
      {/* <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
    </FormGroup>
  );
}
