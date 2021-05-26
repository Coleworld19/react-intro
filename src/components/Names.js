import React, { Component } from 'react'

export default class Names extends Component {
    render() {
        const names = this.props.name
        return (
            <tr key={}>
                <td>{names.first}</td>
                <td>{names.last}</td>
                <td>{names.ID}</td>

            </tr>
        )
    }
}