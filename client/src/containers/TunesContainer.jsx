import React from 'react';
import TuneSelect from '../components/TuneSelect.jsx';
import TuneDetail from '../components/TuneDetail.jsx';
import Title from '../components/Title.jsx';

class TunesContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tuneList: [],
      tuneDetail: {
        artist : 
      }
    };
  }

  render(){
    return (
      <div className='tunes-container'>
        <Title text='Top Twenty' />
          <div className='toptwenty'>
          <TuneSelect
          selectedTune={this.stake.tuneid}
          tuneList={this.state.tuneList}
          />
          <TuneDetail
          tune={this.state.tuneDetail}
          />
          </div>
      </div>
      );
  }

  getTuneDetail(tuneId) {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = () => {
      if (request.status === 200) {
        const jsonData = request.responseText;
        const tune = JSON.parse(jsonData);
        const tuneDetail = {
          name: this.capitalize(tune.name),
        };
        tune Detail.types = tune.types.map(typeObject => {
          return this .capitalize(typeObject.type.name);
        });
        this.setState({tuneDetail: tuneDetail});
      }
    };

    request.send(null);
  }

  getTuneList(tune) {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload =() => {
      if (request.status ===200) {
        const jsonData = request.responseText;
        const tuneData = JSON.parse(jsonData);
        const tuneList = tuneData.results;
        tuneList.forEach(tune, index) => {
          tune.id =(offset +1) + index;
          tune.name = this.capitalize(tune.name);
        });
        this.setState({tuneList: tuneList});
      }
    }
    request.send(null);
  }

}

export default TunesContainer;