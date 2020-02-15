import React from 'react';
import './tableStyle.css';


export default function Table(props)  {

    
        return (
            <div>
                <table>
                    <thead>
                        <tr>Image</tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </thead>
                    <tr>
                        <td>{this.props.picture}</td>
                        <td>{this.props.name}</td>
                        <td>{this.props.phone}</td>
                        <td>{this.props.email}</td>
                        <td>{this.props.dob}</td>
    
                    </tr>
                  
                </table>

            </div>
        )
    

}