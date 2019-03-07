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
    stars.push([FullStarIcon, size]);
  }

  if (second >= 5) {
    stars.push([HalfStarIcon, size]);
  }

  while (stars.length < 5) {
    stars.push([EmptyStarIcon, size]);
  }

  return (
    <>
      {
        stars.map((Arr, idx) => {
          const Star = Arr[0];
          const size = Arr[1];
          return <Star key={ idx } size={ size } />;
        })
      }
    </>
  );
}


export default StarIcon;
