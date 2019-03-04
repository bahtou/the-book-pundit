import React from 'react';
import { container, box } from './styles.css';

const ClockIcon = () => {
  return (
    <svg viewBox="0 0 24 24">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-24.000000, -223.000000)" stroke="#757575" strokeWidth="1.83000004">
          <g transform="translate(9.000000, 212.000000)">
            <g transform="translate(15.000000, 11.000000)">
              <circle cx="12" cy="12" r="11.085" />
              <polyline points="17.5384615 16 11.6923077 12.6153846 11.6923077 5.53846154" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};


export default ClockIcon;
