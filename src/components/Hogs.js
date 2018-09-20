import hogs from '../porkers_data';
import React, { Component } from 'react'
import Hog from './Hog'

class Hogs extends Component {

  state = {
     hogs
  }

  render() {

    const { hogs } = this.state;
        return (
            <div className="ui link cards">
            {hogs.map(hog => (
                <Hog hog={hog}/>
            ))}
            </div>
        );
  }
}

export default Hogs;