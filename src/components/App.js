import React from 'react';

import SearchBar from "./SearchBar";

class App extends React.Component {


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