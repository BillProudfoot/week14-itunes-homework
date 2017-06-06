import React from 'react';

const TuneSelect = (props) => {
  const options = props.tuneList.map(tune => {
    return (
      <option value={tune.entry.label} key={tune.entry.label}>
       {tune.name}
      </option>
      )
  });

  return (
    <div className='tune-select'>
      <label>Tune: </label>
      <select
      value={props.selectedTune}
      onChange={props.handleTuneSelected}
      >
        { options }
        </select>
        </div>
    );
};

export default TuneSelect;