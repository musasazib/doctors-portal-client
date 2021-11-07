import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Appointments = ({ date }) => {
    const { user } = useAuth([]);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [user.email, date])

    return (
        <div>
            <h4>Appointments: {appointments.length}</h4>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: '100%' }} aria-label="appointments">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Time</TableCell>
                            <TableCell align="left">Service</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="left">{row.time}</TableCell>
                                <TableCell align="left">{row.serviceName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;