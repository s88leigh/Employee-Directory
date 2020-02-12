import React from 'react';
import './search-style.css';


export default class SearchBar extends React.Component {


    state = {
        search: "", //we are searching for...
        employees: [] //employees

    };

    handleInputChange = (event) => {

    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() { //include some states. we're gonna change come states that are put in
        return(
            <div className='row'>
                <form>
                    <input
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}> 
                    </input>
                    <button
                    >
                        Search
                    </button>
                   
                </form>
            </div>
        )
    }
    
}