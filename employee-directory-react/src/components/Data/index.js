import React from 'react';
// import styles from './styles.css';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

export default class EmployeeList extends React.Component {

    state = {
        loading: true,
        employees: []
       
    }
    componentDidMount() {
        const url = 'https://randomuser.me/api/?results=20&nat=us';
        axios.get(url)
        .then ((response)=> {
              
        this.setState({employees: response.data.results});
        })
        
 
    }
    render() {
        return (
            <div> 
                <ReactBootStrap.Table>
                    <thead>
                        <tr>
                             <td className='photo'>
                                Photo
                            </td>
                            <td className='name'>
                                Name
                            </td>
                            <td className='phone'>
                                Phone
                            </td>
                            <td className='email'>
                                Email
                            </td>
                            <td className='dob'>
                                DOB
                            </td>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee) => (
                            <tr>
                                <td>
                                    <img src= {employee.picture.medium} />
                                </td>
                                <td>
                                    {employee.name.first}
                                </td>
                                <td>
                                    {employee.phone}
                                </td>
                                <td>
                                    {employee.email}
                                </td>
                                <td>
                                    {employee.dob.age}
                                </td>

                            </tr>

                        ))}
                    </tbody>
                 </ReactBootStrap.Table>
               
            </div>
        )}
}