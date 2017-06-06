import React from 'react';

const TuneDetail = (props) => {
  return (
    <div className='tune-detail'>
      <h1 className='tune-title'>#{props.tune.id}: {props.tune.name}</h1>
      <img
        className='tune-image' src={props.tune.image}
        alt={props.tune.name + ' image'}
        />
    </div>
  );
};

export default TuneDetail;