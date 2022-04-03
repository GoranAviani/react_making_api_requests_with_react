import React from 'react';


class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {term: ''}
    }

    userInput = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (<div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text"
                           value={this.state.term}
                           onChange={this.userInput}/>
                </div>
            </form>
        </div>)
    }
}

export default SearchBar;