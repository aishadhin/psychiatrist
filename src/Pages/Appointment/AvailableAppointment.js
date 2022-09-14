import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AppointmentModal from './AppointmentModal';
import DateCard from './DateCard';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP')

    const { refetch, isLoading, error, data:services } = useQuery(['available' , formattedDate], () =>
     fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
       res.json()
     )
   )





    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])
    return (
        <div className='container mx-auto'>
            <div>
                <h2 className='text-center'>Available Appointments on {format(date, 'PP')}</h2>
                <div className='lg:grid mx-auto lg:grid-cols-3'>
                    {
                        services?.map(service => <DateCard setTreatment={setTreatment} service={service} key={service._id}></DateCard>)
                    }
                </div>
                <div>
                   {treatment &&  <AppointmentModal refetch={refetch} setTreatment = {setTreatment} services={services} date={date} treatment={treatment}></AppointmentModal>}
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;