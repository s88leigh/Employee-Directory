import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader';
import SearchBar from './components/SearchBar';
// import Table from './components/Table';
import Data from './components/Data'






export default class App extends React.Component {
  render() {
    return (
      <div className='App'>


         <PageHeader />

        <SearchBar /> 

        <Data />

        {/* <Table /> */}

      </div>
    )
  }
}

