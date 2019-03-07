import React from 'react';
import { container, box } from '../styles.css';


const HalfStarIcon = ({ size }) => {
  let width = '40';
  let height = '40';

  if (size === 'small') {
    width = '20';
    height = '20';
  }

  return (
    <div className={ container }>
      <span className={ box }>
        <svg width={ width } height={ height } viewBox="0 0 20 19" version="1.1">
          <defs>
            <rect id="path-1" x="0" y="0" width="10" height="18" />
          </defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="half-Star">
              <path d="M15.213787,17.1761622 L14.2180423,11.370525 L18.4360846,7.25894996 L12.6068935,6.41191891 L10,1.12977573 L7.3931065,6.41191891 L1.56391541,7.25894996 L5.7819577,11.370525 L4.78621299,17.1761622 L10,14.4351121 L15.213787,17.1761622 Z" id="Star" stroke="#BF9026" fill="#FFFFFF" />
              <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1" />
              </mask>
              <g id="Mask" />
              <path d="M15.213787,17.1761622 L14.2180423,11.370525 L18.4360846,7.25894996 L12.6068935,6.41191891 L10,1.12977573 L7.3931065,6.41191891 L1.56391541,7.25894996 L5.7819577,11.370525 L4.78621299,17.1761622 L10,14.4351121 L15.213787,17.1761622 Z" id="Star" stroke="#BF9026" fill="#FFC000" mask="url(#mask-2)" />
            </g>
          </g>
        </svg>
      </span>
    </div>
  );
};


export default HalfStarIcon;
