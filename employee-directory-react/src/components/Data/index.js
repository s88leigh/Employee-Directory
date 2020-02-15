import React from 'react';
import axios from 'axios';


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
                <table>
                    <thead>
                        <tr>
                            <td>
                                email
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee) => (
                            <tr>
                                <td>
                                    {employee.email}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                {/* <img src={this.state.person.picture.thumbnail} alt={pict}/> */}
                {/* <div>{this.state.employee.name}</div>
                <div>{this.state.employee.phone}</div>
                <div>{this.state.employee.email}</div>
                <div>{this.state.employee.dob}</div> */}
 
               
            </div>
        )}
}