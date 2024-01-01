import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import "./RatingReadOnly.css";

export default function RatingComp({rating}) {
  return (
    <Stack spacing={1}>
      {/* <Rating name='half-rating' defaultValue={2.5} precision={0.5} /> */}
      <Rating
        name='half-rating-read'
        defaultValue={rating}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
}
