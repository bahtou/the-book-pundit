import React from 'react';
import { container, box } from '../styles.css';


const EmptyStarIcon = ({ size='reg' }) => {
  let width = '20px';

  if (size === 'small') {
    width = '10px';
  }

  return (
    <div className={ container }>
      <span className={ box }>
        <svg width={ width } height="19px" viewBox="0 0 20 19">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M15.213787,17.1761622 L14.2180423,11.370525 L18.4360846,7.25894996 L12.6068935,6.41191891 L10,1.12977573 L7.3931065,6.41191891 L1.56391541,7.25894996 L5.7819577,11.370525 L4.78621299,17.1761622 L10,14.4351121 L15.213787,17.1761622 Z" id="full-Star" stroke="#BF9026" fill="#FFFFFF" />
          </g>
        </svg>
      </span>
    </div>
  );
};



export default EmptyStarIcon;
