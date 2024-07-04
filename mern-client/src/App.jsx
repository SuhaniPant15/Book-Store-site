import './App.css'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import 'flowbite/dist/flowbite.css';
import MyFooter from './components/MyFooter';
// import { SearchBar } from "./components/SearchBar";
import { useState } from "react";


function App() {
  const [results, setResults] = useState([]);
  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-screen'>
      <Outlet/>
      </div>
      <MyFooter/>
      {/* <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      </div> */}
    </>
    
  );
}

export default App