import React from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar';
import Data from '../Data';


export default class Search extends React.Component {

    state = {
        search: '', //we are searching for...
        name: '',
        phone: '',
        email: '',
        employees: [] //employees array
    };

    handleInputChange = (event) => {
      const {name, value} = event.target;

      this.setState(
          {
            [name]: value  
          }
      )
  }

  handleSubmit = (event) => {
      event.preventDefault();
      const url = `https://randomuser.me/api/?results=20&nat=us&q=${this.state.search}`;
      axios.get(url)
          .then((response) => {
              this.setState(
                  {
                      employees: response.data.data
                  }
              )
          })
          .catch((err) => {
              console.error(err);
          })

  }

  render() {
      return (
          <div>
              <SearchBar
                  search={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleSubmit={this.handleSubmit}
              />
              <Data
                  employees={this.state.employees}
              />
          </div>
      );
  }
}
