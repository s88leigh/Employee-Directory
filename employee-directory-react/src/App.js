import React from 'react';
import './App.css';
import axios from 'axios';
import PageHeader from './components/PageHeader';
import SearchBar from './components/SearchBar';
// import Search from './components/Search';
import Data from './components/Data';


export default class App extends React.Component {

  state = {
    employees: [],
    filteredEmployees: []
  }

  componentDidMount() {
    const url = 'https://randomuser.me/api/?results=20&nat=us';
    axios.get(url)
      .then((response) => {
       
        this.setState({
          employees: response.data.data,
          filteredEmployees: response.data.data,
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }


  handleInputChange = event => {
    const { value } = event.target;
    console.log(value)
    
    this.setstate({ 
      filteredEmployees: [];
    })
    // goal: Create new array of filtereed users array.filter()
    
    
    
  }

  render() {
    return (
      <div className='App'>

        <PageHeader />

        <SearchBar handleInputChange={this.handleInputChange} />

        <Data employees={this.state.filteredEmployees} />

      </div>
    )
  }
}

