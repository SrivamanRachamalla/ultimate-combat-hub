import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
// import {  Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

function ProjectQr() {
    // const [data, setData] = useState([]);
    // const [editingItem, setEditingItem] = useState(null);
    const [arr, setArr] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get("http://localhost:5002/fetch");
                console.log(response.data);
                setArr(response.data || []);
            } catch (err) {
                throw err;
            }
        };

        fetchData();
    }, []);

    return (
        <div>


            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>BATCHNO</th>
                        <th>QUALIFICATION</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.batchno}</td>
                            <td>{item.Qualification}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ProjectQr;
