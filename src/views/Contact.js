import React, { Component } from 'react'
import Names from '../components/Names'

export default class Contact extends Component {



render() {
    const names = this.props.n
    return (
        <div>
            Welcome To Kekambas 
            <button className='btn btn-primary' onClick={this.props.updateName}>Update Name</button>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {names.map((name, index) => (<Names name={name} index={index} />))}
                </tbody>
            </table>
        </div>
    )
}
}
