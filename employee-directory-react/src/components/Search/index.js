import React from 'react';
import axios from 'axios';
import '.style.css';

import SearchBar from '../SearchBar';

//activity Gify search

var Employees = [];

export default class Search extends React.Component {

    state = {
        search: '', //we are searching for...
        picture: '',
        name: '',
        phone: '',
        email: '',
        dob: '',
        employee: [] //employees

    };

        
  constructor(props) {
    super(props);
    this.state = {
      employee: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=20&nat=us')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          employees: json,
        })
      });
  }

  render() {

    var {isLoaded, employees } = this.state;

    if (!isLoaded) {
      return <div> Loading...</div>;
    }
    else {

      return (
        <div className='App'>
    
          <ul>
            {this.employees.map(item => (

              <li key={employee.id}>
                  {employee.picture}
              {employee.name}
               {employee.phone}
                {employee.dob}

              </li>

            ))};
              </ul>
          </div>
     
      );

    }
  }
}

    }
