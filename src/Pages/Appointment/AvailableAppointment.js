import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import DateCard from './DateCard';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className='text-center'>Available Appointments on {format(date, 'PP')}</h2>
                <div>
                    {
                        services.map( service => <DateCard service={service} key={service._id}></DateCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;