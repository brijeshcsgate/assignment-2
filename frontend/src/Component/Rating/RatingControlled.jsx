import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import './RatingReadOnly.css';

export default function RatingComp({ defaultRating, setRating }) {
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating"
        defaultValue={defaultRating}
        precision={0.5}
        onChange={(e) => setRating(e.target.value)}
      />
      {/* <Rating
        name='half-rating-read'
        defaultValue={rating}
        precision={0.5}
        readOnly
      /> */}
    </Stack>
  );
}
