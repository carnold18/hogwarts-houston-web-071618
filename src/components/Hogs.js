import hogs from '../porkers_data';
import React, { Component } from 'react'
import Hog from './Hog'

class Hogs extends Component {

  state = {
     hogs
  }

  render() {
    const { hogs } = this.state;

    // sort by value
    const hogSortWeight = (hogs) => {
        this.setState({
            hogs: this.state.hogs.sort(function (a, b) {
                return a.value - b.value;})
        });
    } 

    // sort by name
    const hogSortName = (hogs) => {
        this.setState({
            hogs: this.state.hogs.sort(function(a, b) {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              
                // names must be equal
                return 0;
              })
            })
    }



        return (
            <div>
                <button onClick={hogSortName}>Sort Yo Hawgz - By Name</button>
                <button onClick={hogSortWeight}>Sort Yo Hawgz - By Weight</button>
                <div className="ui link cards">
                {hogs.map(hog => (
                    <Hog hog={hog}/>
                ))}
                </div>
            </div>
        );
  }
}

export default Hogs;