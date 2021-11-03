import React from 'react';
import Services from '../Services/Services';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;