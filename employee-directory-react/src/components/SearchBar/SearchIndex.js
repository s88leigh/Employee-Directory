import React, {useState, useEffect} from 'react';
import './search-style.css';


export default class SearchBar extends React.Component {

    const [search, setSearch] => useState('');
    const [name, setName] => useState('');
    const [phone, setPhone] => useState('');
    const [email, setEmail] => useState('');
    const [dob, setDob] => useState('');

    useEffect(()=> {
        search()
    }, (search));

    state = {
        search: '', //we are searching for...
        name: '',
        phone: '',
        email: '',
        dob: '',
        employees: [] //employees

    };

    handleInputChange = (event) => {

    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() { //include some states. we're gonna change come states that are put in
        return(
            <div className='row2'>
                <form className="inputBox">
                    <input
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}> 
                    </input>
                    <button className='submitBox'
                    >
                        Search
                    </button>
                   
                </form>
            </div>
        )
    }
    
}