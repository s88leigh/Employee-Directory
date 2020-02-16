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
            .then((response) => {

                this.setState({ employees: response.data.results });
            })

    }

    render() {

        return (
            <div>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr className="justify-content-md-center">
                            <td>
                                Photo
                            </td>
                            <td>
                                Name
                            </td>
                            <td>
                                Phone
                            </td>
                            <td>
                                Email
                            </td>
                            <td>
                                DOB
                            </td>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>
                                    <img src={employee.picture.medium} />
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
        )



    }
}