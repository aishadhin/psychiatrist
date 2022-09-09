import React, { useState } from 'react';
import AppHero from './AppHero';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppHero date={date} setDate={setDate}></AppHero>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;