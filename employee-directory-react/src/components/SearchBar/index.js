import React from 'react';
import './search-style.css';


export default (props) => 
<div className='row2'>
    <form className="col-4 offset-sm-5">
        <input 
            type='search'
            onChange={e => props.handleInputChange(e)}
        /> 
    </form>
</div>