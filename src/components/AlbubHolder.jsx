import React from "react";
import  Table from 'react-bootstrap/Table/'

function AlbumHolder() {
    return (
        <>
            <Table striped bordered hover variant="dark" size = "small">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
            </tr>
            <tr>
                <td>3</td>
                <td >Larry the Bird</td>
            </tr>
            </tbody>
        </Table>

        </>

    )
}
export default AlbumHolder;
