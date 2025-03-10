import React from "react";

import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);


    this.state ={
        term:''
    }

        this.search = this.search.bind(this);
        this.handelTermChange = this.handelTermChange.bind(this);
    }

    search () {
        this.props.onSearch(this.state.term);
    }

    handelTermChange(event) {
        this.setState({term:event.target.value});
    }
    
    render() {
        return(             
            <div className="SearchBar">
                <input onChange = {this.handelTermChange} placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;