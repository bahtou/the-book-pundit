import React from 'react';
import { container, box } from '../styles.css';


const FullStarIcon = ({ size }) => {
  let width = '40';
  let height = '40';

  if (size === 'small') {
    width = '20';
    height = '20';
  }

  return (
    <div className={ container }>
      <div className={ box }>
        <svg width={ width } height={ height } viewBox="0 0 20 19">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M15.213787,17.1761622 L14.2180423,11.370525 L18.4360846,7.25894996 L12.6068935,6.41191891 L10,1.12977573 L7.3931065,6.41191891 L1.56391541,7.25894996 L5.7819577,11.370525 L4.78621299,17.1761622 L10,14.4351121 L15.213787,17.1761622 Z" id="full-Star" stroke="#BF9026" fill="#FFC000" />
          </g>
        </svg>
      </div>
    </div>
  );
};



export default FullStarIcon;
