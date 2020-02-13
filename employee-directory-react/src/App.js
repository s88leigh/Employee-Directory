import React from 'react';
import PageHeader from './components/PageHeader/pageIndex';
import SearchBar from './components/SearchBar/SearchIndex';
import TableArea from './components/TableArea/TableAreaIndex';
import TableData from './components/TableData/TableDataIndex';


import './App.css';


function App() {
  return (
    <div>
    <div>
    <PageHeader/>
    </div>

    <div>
    <SearchBar/>
    </div>

    <div>
    <TableArea/>
    </div>

    <div>
    <TableData/>
    </div>
    </div>
  );
}

export default App;
