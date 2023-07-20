import React from 'react';

import './cardStyle.css';

const Card = ({ data }) => {
  return (
    <div className='card-cnt' style={{ backgroundColor: data.backGroundColor }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <div>
          <img
            style={{ borderRadius: '50%' }}
            src={data.img}
            alt='profile image'
          />
        </div>
        <div>
          <p
            className='card-name'
            style={{
              color: data.color,
              fontSize: data.nameFontSize,
              fontWeight: data.nameFontWeight,
            }}
          >
            {data.name}
          </p>
          <p
            className='card-education'
            style={{
              color: data.color,
              fontSize: '10px',
              fontWeight: data.nameFontWeight,
              opacity: '0.5',
            }}
          >
            {data.education}
          </p>
        </div>
      </div>
      <div>
        <p
          className='card-header'
          style={{
            fontSize: data.headerFontSize,
            color: data.headerFontColor,
          }}
        >
          {data.header}
        </p>
        <p className='card-para'>{data.para}</p>
      </div>
    </div>
  );
};

export default Card;
