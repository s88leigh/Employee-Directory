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
        console.log(response.data)
        this.setState({
          employees: response.data.results,
          filteredEmployees: response.data.results,
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  handleInputChange = event => {
    const { value } = event.target;
    console.log(value)
    // goal: Create new array of filtereed employeess array.filter()
    //filter this.state.employees for employees with names that includes the letters typed
    //set this state.employees equal to the new employees array
    const newFiltered = this.state.employees
      .filter(emp => {
        let keys = JSON.stringify(emp).toLowerCase()
        return keys.includes(value.toLowerCase())
      })
    this.setState({ filteredEmployees: newFiltered })
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

