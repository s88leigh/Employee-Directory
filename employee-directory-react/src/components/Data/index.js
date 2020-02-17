import React from 'react';
// import styles from './styles.css';
// import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

export default (props) => <div>
    <ReactBootStrap.Table striped bordered hover>
        <thead>
            <tr className="justify-content-md-center">
                <td> Photo </td>
                <td> Name </td>
                <td> Phone </td>
                <td> Email </td>
                <td> DOB </td>

            </tr>
        </thead>
        <tbody>
            {props.employees.map((employee) => (
                <tr key={employee.name}>
                    <td>
                        <img
                            src={employee.picture.medium}
                            alt={employee.title}
                        />
                    </td>
                    <td> {employee.name.first} </td>
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