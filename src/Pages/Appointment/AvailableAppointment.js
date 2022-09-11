import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from './AppointmentModal';
import DateCard from './DateCard';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className='text-center'>Available Appointments on {format(date, 'PP')}</h2>
                <div>
                    {
                        services.map(service => <DateCard setTreatment={setTreatment} service={service} key={service._id}></DateCard>)
                    }
                </div>
                <div>
                   {treatment &&  <AppointmentModal setTreatment = {setTreatment} services={services} date={date} treatment={treatment}></AppointmentModal>}
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;