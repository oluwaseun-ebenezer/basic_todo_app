import React from 'react'

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
                <td>
                    <button onClick={() => { props.removePerson(index) }}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const Table = props => {
    const { peopleData, removePerson } = props

    return (
        <table>
            <TableHeader />
            <TableBody peopleData = { peopleData } removePerson = { removePerson } />
        </table>
    )
}

export default Table