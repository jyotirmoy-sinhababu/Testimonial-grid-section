import React from 'react';
import { data } from '../../data/Data';
import Card from '../../components/cards/Card';

import './homeStyle.css';

const Home = () => {
  return (
    <div>
      {data?.map((item) => {
        return (
          <div className='home-card-cnt' key={item.id}>
            <Card data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
