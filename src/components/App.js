import React from 'react';

import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {images: []}
    }

    async onSearchSubmit (term) {
        const response = await axios.get('https://api.unsplash.com/search/photos',
            {
                params: {
                    query: term
                },
                headers: {
                    Authorization: 'Client-ID '
                }
            });
        console.log(this)
        this.setState({images: response.data.results})


    }


    render() {
        return (
            <div>
                <div className="ui container" style={{marginTop: '10px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit}
                    guesswhatIAm = "im a props object"/>
                    Found: {this.state.images.length} images!
                </div>
            </div>
        )
    }


}

export default App;