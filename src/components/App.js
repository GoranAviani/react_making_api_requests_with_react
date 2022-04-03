import React from 'react';

import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {

    onSearchSubmit(term){

// Make a request for a user with a given ID
axios.get('https://api.unsplash.com/search/photos',
    {
        params: {
          query: term
        },
        headers: {
            Authorization: 'Client-ID your-access-key'
        }
    })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    }


    render() {
        return (
            <div>
                <div className="ui container" style={{marginTop: '10px'}}>
                    <SearchBar onSubmit = {this.onSearchSubmit}/>
                </div>
            </div>
        )
    }


}

export default App;