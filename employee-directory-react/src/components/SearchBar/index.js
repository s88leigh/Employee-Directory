import React from 'react';
import './search-style.css';


export default (props) => <div className='row2'>
    <form className='inputBox'>
        <input
            type='search'
            onChange={props.handleInputChange}
        > </input>
    </form>
</div>