import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';


const Appointment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader></AppointmentHeader>
            <AvailableAppointment></AvailableAppointment>
        </div>
    );
};

export default Appointment;