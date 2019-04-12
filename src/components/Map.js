import React, { Component } from 'react';
import ReactMap from 'react-mapbox-gl';

const accessToken = "pk.eyJ1IjoidHVja2VybmVtY2VrIiwiYSI6ImNqdWMxbzZzdjBnMHo0NXFyYXV4M2lka2IifQ.pSqQKw6Hdusv9yqy3Cu6sw"
const style = "mapbox://styles/mapbox/streets-v9";

const Map = ReactMap({
  accessToken
});

const mapStyle = {
  height: '100%',
  width: '100%'
};

class App extends Component {
  render() {
    return (
      <Map
        style={style}
        containerStyle={mapStyle}
      />
    );
  }
}

export default App;
