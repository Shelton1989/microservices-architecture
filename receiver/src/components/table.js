import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

const RequestsTable = (props) => {
    const { requests } = props

    let content = (<tr>
        <td colSpan={6}>There are currently no records.</td>
    </tr>)

    if (requests) {
        content = props.requests.map(i => {
            return (<tr>
                <td>{i.first_name?i.first_name:''}</td>
                <td>{i.last_name?i.last_name:''}</td>
                <td>{i.message?i.message:''}</td>
                <td>{i.email?i.email:''}</td>
                <td>{i.location?i.location:''}</td>
                <td>{i.created_at?i.created_at:''}</td>
            </tr>)
        })
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Message</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {content}
            </tbody>
        </Table>
    )
}

export default RequestsTable;