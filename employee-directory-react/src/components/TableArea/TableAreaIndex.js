import React from 'react';
import './tableStyle.css';


export default class TableArea extends React.Component {

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                    <tr>
                        <td><img src='/images/fishbowl.PNG' alt='fishbowl'/></td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>Germany</td>
                        <td>Germany</td>

                    </tr>
                    <tr>
                        <td>Germany<img></img></td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Germany<img></img></td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Germany<img></img></td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                </table>

            </div>
        )
    }

}