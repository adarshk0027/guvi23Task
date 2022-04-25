import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './search.css'
function SearchBar() {
  return (
    <div className='d-flex'>
        <input className='search rounded' type="search" name="" id="" placeholder='search for...' />
        <SearchIcon className='rounded' style={{color:"white",backgroundColor:"blue",fontSize:"2.3rem"}}></SearchIcon>
    </div>
  )
}

export default SearchBar