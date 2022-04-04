import React from 'react';

import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {

    async onSearchSubmit(term) {

// Make a request for a user with a given ID
        const response = await axios.get('https://api.unsplash.com/search/photos',
            {
                params: {
                    query: term
                },
                headers: {
                    Authorization: 'Client-ID Cbo29MbIl9rNunrb5vdOQHYpZ3E_JvuNa_Fcjy-OpkI'
                }
            });

        console.log(response.data.results)

    }


    render() {
        return (
            <div>
                <div className="ui container" style={{marginTop: '10px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                </div>
            </div>
        )
    }


}

export default App;