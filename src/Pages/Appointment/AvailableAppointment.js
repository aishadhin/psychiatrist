import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AppointmentModal from './AppointmentModal';
import DateCard from './DateCard';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP')

    const { refetch, isLoading, error, data: services } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <div className='grid place-items-center p-[200px]'>
            <button className="btn btn-square bg-primary border-none loading"></button>
        </div>
    }

    return (
        <div className='w-[88%] py-[65px] mx-auto'>
            <div>
                <h2 className='text-center text-xl font-medium mb-10 capitalize'>Available Appointments on: <span className='text-primary'>{format(date, 'PP')}</span> </h2>
                <div className='lg:grid mx-auto lg:grid-cols-3'>
                    {
                        services?.map(service => <DateCard setTreatment={setTreatment} service={service} key={service._id}></DateCard>)
                    }
                </div>
                <div>
                    {treatment && <AppointmentModal refetch={refetch} setTreatment={setTreatment} services={services} date={date} treatment={treatment}></AppointmentModal>}
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;