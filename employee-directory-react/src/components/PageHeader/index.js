import React from 'react';
import './style.css';


export default class PageHeader extends React.Component {

    render() {
        return (
            <div className='row1'>
                {/* <div className='row'> */}
                    <h1>Employee Directory</h1>
                    <p>Click on the carrots to filter by heading or use the search box to narrow your results.</p>
                {/* </div> */}
            </div>
            
               
        )
    }

}