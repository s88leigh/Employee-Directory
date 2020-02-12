import React from 'react';
import PageHeader from './components/PageHeader';
import SearchBar from './components/SearchBar';
import TableArea from './components/TableArea';
import TableHeader from './components/TableHeader';
import TableData from './components/TableData';


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
    <TableHeader/>
    </div>

    <div>
    <TableData/>
    </div>
    </div>
  );
}

export default App;
