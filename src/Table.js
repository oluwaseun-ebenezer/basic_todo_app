import React, { Component } from 'react'

//Simple Components
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.peopleData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

//Complex Component
class Table extends Component{
    render(){
        const { peopleData } = this.props
        return(
            <table>
                <TableHeader />
                <TableBody peopleData = { peopleData } />
            </table>
        )
    }
}

export default Table