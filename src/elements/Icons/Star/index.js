import React from 'react';

import FullStarIcon from './Full';
import HalfStarIcon from './Half';
import EmptyStarIcon from './Empty';


function StarIcon({ rating=0, size }) {
  const stars = [];
  let [ first, second ] = rating.toString().split('.');

  if (second && second[0]) {
    second = second[0];
  }

  let i=0;
  for (;i<first; i++) {
    stars.push(FullStarIcon);
  }

  if (second >= 5) {
    stars.push(HalfStarIcon);
  }

  while (stars.length < 5) {
    stars.push(EmptyStarIcon);
  }

  return (
    <>
      {
        stars.map((Star, idx) => <Star key={ idx } size={ size } />)
      }
    </>
  );
}


export default StarIcon;
