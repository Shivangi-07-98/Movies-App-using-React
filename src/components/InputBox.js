import React from 'react';
import {Link} from 'react-router-dom';

function InputBox(props) {
    let [searchText, setSearchText] = React.useState("");
    let [NumberOfItems, setNumberOfItems] = React.useState(4);

    const handleText = (e) => {
        setSearchText(e.target.value)
        props.setGlobalSearchText(e.target.value)
    }
    const handleCount = (e) => { 
        setNumberOfItems(e.target.value)
        props.setGlobalNumberOfItems(e.target.value)
    }
  return (
    <>
      <Link to='/new' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>New</Link>
      <input className='border rounded py-1 px-1 mx-2 font-bold' type='text' value={searchText} onChange={handleText}></input>
      <input className='border rounded py-1 px-1 mx-2 font-bold' type='number' value={NumberOfItems} onChange={handleCount}></input>
    </>
  )
}

export default InputBox