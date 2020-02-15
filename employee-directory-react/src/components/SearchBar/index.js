import React from 'react';
import './search-style.css';


export default class SearchBar extends React.Component {

 
    state = {
        search: '', //we are searching for...
        name: '',
        phone: '',
        email: '',
        dob: '',
        employee: [] //employees

    };

    

    render() { //include some states. we're gonna change some states that are put in
        return(
            <div className='row2'>
                <form className='inputBox'>
                    <input 
                        name='search'
                        onChange={this.props.handleSearchChange}
                        value ={this.props.search}
                        >
                    </input>
           
                    <button className='submitBox'
                      onClick={this.props.search}
                    >Search
                    </button>
                   
                </form>
            </div>
        )
    }
    
}